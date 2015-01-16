/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * PhotoStore
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var PhotoConstants = require('../constants/PhotoConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _photos = {};

/**
 * Create a Photo item.
 * @param  {string} text The content of the Photo
 */
function create(text) {
  // Hand waving here -- not showing how this interacts with XHR or persistent
  // server-side storage.
  // Using the current timestamp + random number in place of a real id.
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _photos[id] = {
    id: id,
    complete: false,
    text: text
  };
}

/**
 * Update a Photo item.
 * @param  {string} id
 * @param {object} updates An object literal containing only the data to be
 *     updated.
 */
function update(id, updates) {
  _photos[id] = assign({}, _photos[id], updates);
}

/**
 * Update all of the Photo items with the same object.
 *     the data to be updated.  Used to mark all Photos as completed.
 * @param  {object} updates An object literal containing only the data to be
 *     updated.

 */
function updateAll(updates) {
  for (var id in _photos) {
    update(id, updates);
  }
}

/**
 * Delete a Photo item.
 * @param  {string} id
 */
function destroy(id) {
  delete _photos[id];
}

/**
 * Delete all the completed Photo items.
 */
function destroyCompleted() {
  for (var id in _photos) {
    if (_photos[id].complete) {
      destroy(id);
    }
  }
}

var PhotoStore = assign({}, EventEmitter.prototype, {

  /**
   * Tests whether all the remaining Photo items are marked as completed.
   * @return {boolean}
   */
  areAllComplete: function() {
    for (var id in _photos) {
      if (!_photos[id].complete) {
        return false;
      }
    }
    return true;
  },

  /**
   * Get the entire collection of Photos.
   * @return {object}
   */
  getAll: function() {
    return _photos;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register to handle all updates
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {
    case PhotoConstants.PHOTO_CREATE:
      text = action.text.trim();
      if (text !== '') {
        create(text);
      }
      break;

    case PhotoConstants.PHOTO_TOGGLE_COMPLETE_ALL:
      if (PhotoStore.areAllComplete()) {
        updateAll({complete: false});
      } else {
        updateAll({complete: true});
      }
      break;

    case PhotoConstants.PHOTO_UNDO_COMPLETE:
      update(action.id, {complete: false});
      break;

    case PhotoConstants.PHOTO_COMPLETE:
      update(action.id, {complete: true});
      break;

    case PhotoConstants.PHOTO_UPDATE_TEXT:
      text = action.text.trim();
      if (text !== '') {
        update(action.id, {text: text});
      }
      break;

    case PhotoConstants.PHOTO_DESTROY:
      destroy(action.id);
      break;

    case PhotoConstants.PHOTO_DESTROY_COMPLETED:
      destroyCompleted();
      break;

    default:
      return true;
  }

  // This often goes in each case that should trigger a UI change. This store
  // needs to trigger a UI change after every view action, so we can make the
  // code less repetitive by putting it here.  We need the default case,
  // however, to make sure this only gets called after one of the cases above.
  PhotoStore.emitChange();

  return true; // No errors.  Needed by promise in Dispatcher.
});

module.exports = PhotoStore;