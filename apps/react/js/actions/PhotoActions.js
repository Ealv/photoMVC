/*
 * PhotoActions
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var PhotoConstants = require('../constants/PhotoConstants');

var PhotoActions = {

   /**
    * @param  {string} text
    */
   createAll: function(photos) {
      AppDispatcher.handleViewAction({
         actionType: PhotoConstants.PHOTO_CREATE_ALL,
         photos: photos
      });
   },

   /**
    * @param  {string} text
    */
   create: function(photo) {
      AppDispatcher.handleViewAction({
         actionType: PhotoConstants.PHOTO_CREATE,
         photo: photo
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
    * Toggle whether a single Photo is check
    * @param  {object} photo
    */
   toggleCheck: function(photo) {
      var id = photo.id;
      if (photo.check) {
         AppDispatcher.handleViewAction({
            actionType: PhotoConstants.PHOTO_UNDO_CHECK,
            id: id
         });
      } else {
         AppDispatcher.handleViewAction({
            actionType: PhotoConstants.PHOTO_CHECK,
            id: id
         });
      }
   },

   /**
    * Mark all Photos as check
    */
   toggleCheckAll: function() {
      AppDispatcher.handleViewAction({
         actionType: PhotoConstants.PHOTO_TOGGLE_CHECK_ALL
      });
   },

   /**
    * @param  {string} id
    */
   destroy: function(id) {
      console.log("destroy " + id);
      AppDispatcher.handleViewAction({
         actionType: PhotoConstants.PHOTO_DESTROY,
         id: id
      });
   },

   /**
    * Delete all the checked Photos
    */
   destroyChecked: function() {
      AppDispatcher.handleViewAction({
         actionType: PhotoConstants.PHOTO_DESTROY_CHECKED
      });
   }

};

module.exports = PhotoActions;
