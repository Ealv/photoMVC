define(['backbone'],
   function(Backbone) {
      var PhotoItem = Backbone.Model.extend({
         defaults: {
            "text": "none"
         },
      });
      return PhotoItem;
   });
