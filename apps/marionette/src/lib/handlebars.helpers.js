define(['require', 'underscore', 'handlebars', 'i18n', 'moment', 'moment-en'], function(require) {

   var _ = require('underscore');
   var Handlebars = require('handlebars');
   var I18n = require('i18n');
   var Moment = require('moment');

   /**
    * I18n Handlebars helper.
    *
    * Takes the first argument of the i18n tag, localizes it and wraps the
    * result in a Handlebars SafeString.
    */
   Handlebars.registerHelper('i18n', function() {
      return new Handlebars.SafeString(
         I18n.t(
            _.first(arguments)
         )
      );
   });

   /**
    * Takes a UNIX timestamp and formats it to nice date (like Tuesday 3
    * February 2015).
    */
   Handlebars.registerHelper('formatTimestamp', function(date) {
      if (!date)
         return;

      Moment.locale(I18n.lng());
      return Moment.unix(date).format('dddd D MMMM YYYY');
   });
});
