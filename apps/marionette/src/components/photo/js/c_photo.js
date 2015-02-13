define(['marionette', 'components/photo/js/v_photo.js'],
   function(Marionette, PhotoView) {
      return Backbone.Marionette.CollectionView.extend({
         childView: PhotoView,
         tagName: "ul",
         className: "grid-photo"
      });
   });
