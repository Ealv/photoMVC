/*
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
function createAll(photos) {
  for(var i in photos)
      create(photos[i],i);
}

/**
 * Create a Photo item.
 * @param  {string} text The content of the Photo
 */
function create(photo,id) {
  // Hand waving here -- not showing how this interacts with XHR or persistent
  // server-side storage.
  // Using the current timestamp + random number in place of a real id.
  //console.log("id from server  " + id);
  //if(id === undefined)
    id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _photos[id] = { id: id, check: false, text: photo.text, url : photo.url};
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
 *     the data to be updated.  Used to mark all Photos as checked.
 * @param  {object} updates An object literal containing only the data to be
 *     updated.

 */
function updateAll(updates) {
  console.log("update all photos");
  for (var id in _photos) {
    update(id, updates);
  }
}

/**
 * Delete a Photo item.
 * @param  {string} id
 */
function destroy(id) {
  console.log("destroy id from store " + id);
  delete _photos[id];
}

/**
 * Delete all the Checked Photo items.
 */
function destroyChecked() {
  for (var id in _photos) {
    if (_photos[id].check) {
      destroy(id);
    }
  }
}

var PhotoStore = assign({}, EventEmitter.prototype, {

  /**
   * Tests whether all the remaining Photo items are marked as checked.
   * @return {boolean}
   */
  areAllChecked: function() {
    for (var id in _photos) {
      if (!_photos[id].check) {
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
   // return 
    //console.dir(window.truc);
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

  //console.log("registe  "+ action.actionType);

  switch(action.actionType) {
    case PhotoConstants.PHOTO_CREATE_ALL:
      createAll(action.photos);
      break;
    case PhotoConstants.PHOTO_CREATE:
        create(action.photo);
      break;
    case PhotoConstants.PHOTO_TOGGLE_CHECK_ALL:
        console.log("check all ");
        updateAll({check: !PhotoStore.areAllChecked()});
      break;
    case PhotoConstants.PHOTO_UNDO_CHECK:
      update(action.id, {check: false});
      break;
    case PhotoConstants.PHOTO_CHECK:
      update(action.id, {check: true});
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
    case PhotoConstants.PHOTO_DESTROY_CHECKED:
      destroyChecked();
      break;
    default:
      return true;
  }

  PhotoStore.emitChange();
  return true; // No errors.  Needed by promise in Dispatcher.
});

module.exports = PhotoStore;