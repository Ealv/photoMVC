var React = require('react');
var PhotoActions = require('../actions/PhotoActions');
var PhotoTextInput = require('./PhotoTextInput.react');

var Header = React.createClass({

   /**
    * @return {object}
    */
   render: function() {
      return ( < header id = "header" >
         < h1 > photos < /h1> < PhotoTextInput id = "new-photo"
         placeholder = "What needs to be done?"
         onSave = {
            this._onSave
         }
         /> < /header >
      );
   },

   /**
    * Event handler called within PhotoTextInput.
    * Defining this here allows PhotoTextInput to be used in multiple places
    * in different ways.
    * @param {string} text
    */
   _onSave: function(text) {
      if (text.trim()) {
         PhotoActions.create(text);
      }

   }

});

module.exports = Header;
