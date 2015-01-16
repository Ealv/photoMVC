/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * PhotoActions
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var PhotoConstants = require('../constants/PhotoConstants');

var PhotoActions = {

  /**
   * @param  {string} text
   */
  create: function(text) {
    AppDispatcher.handleViewAction({
      actionType: PhotoConstants.PHOTO_CREATE,
      text: text
    });
  },

  /**
   * @param  {string} id The ID of the Photo item
   * @param  {string} text
   */
  updateText: function(id, text) {
    AppDispatcher.handleViewAction({
      actionType: PhotoConstants.PHOTO_UPDATE_TEXT,
      id: id,
      text: text
    });
  },

  /**
   * Toggle whether a single Photo is complete
   * @param  {object} photo
   */
  toggleComplete: function(photo) {
    var id = photo.id;
    if (photo.complete) {
      AppDispatcher.handleViewAction({
        actionType: PhotoConstants.PHOTO_UNDO_COMPLETE,
        id: id
      });
    } else {
      AppDispatcher.handleViewAction({
        actionType: PhotoConstants.PHOTO_COMPLETE,
        id: id
      });
    }
  },

  /**
   * Mark all Photos as complete
   */
  toggleCompleteAll: function() {
    AppDispatcher.handleViewAction({
      actionType: PhotoConstants.PHOTO_TOGGLE_COMPLETE_ALL
    });
  },

  /**
   * @param  {string} id
   */
  destroy: function(id) {
    AppDispatcher.handleViewAction({
      actionType: PhotoConstants.PHOTO_DESTROY,
      id: id
    });
  },

  /**
   * Delete all the completed Photos
   */
  destroyCompleted: function() {
    AppDispatcher.handleViewAction({
      actionType: PhotoConstants.PHOTO_DESTROY_COMPLETED
    });
  }

};

module.exports = PhotoActions;