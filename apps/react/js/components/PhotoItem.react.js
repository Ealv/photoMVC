/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var PhotoActions = require('../actions/PhotoActions');
var PhotoTextInput = require('./PhotoTextInput.react');

var cx = require('react/lib/cx');

var PhotoItem = React.createClass({

   propTypes: {
      photo: ReactPropTypes.object.isRequired
   },

   getInitialState: function() {
      return {
         isEditing: false
      };
   },

   /**
    * @return {object}
    */
   render: function() {
      //console.log("render photo item ");
      //console.dir(this.props);
      var photo = this.props.photo;

      var input;
      if (this.state.isEditing) {
         input = < PhotoTextInput className = "edit"
         onSave = {
            this._onSave
         }
         value = {
            photo.text
         }
         />;
      }

      // List items should get the class 'editing' when editing
      // and 'checked' when marked as checked.
      // Note that 'checked' is a classification while 'check' is a state.
      // This differentiation between classification and state becomes important
      // in the naming of view actions toggleCheck() vs. destroyChecked().

      return ( < li className = {
            "photo-item col-xs-12 col-md-2 col-lg-1 " + cx({
               'checked': photo.check,
               'editing': this.state.isEditing
            })
         }
         key = {
            photo.id
         } >

         < a href = "#" >
         < img className = "img-responsive-inv"
         src = {
            decodeURI(photo.url)
         }
         /> < /a > < input className = "toggle"
         type = "checkbox"
         checked = {
            photo.check
         }
         onChange = {
            this._onToggleCheck
         }
         /> < label onDoubleClick = {
         this._onDoubleClick
      } > {
         photo.text
      } < /label> < button className = "destroy"
      onClick = {
         this._onDestroyClick
      }
      /> {
      input
   } < /li>);
},

_onToggleCheck: function() {
   PhotoActions.toggleCheck(this.props.photo);
},

_onDoubleClick: function() {
   this.setState({
      isEditing: true
   });
},

/**
 * Event handler called within PhotoTextInput.
 * Defining this here allows PhotoTextInput to be used in multiple places
 * in different ways.
 * @param  {string} text
 */
_onSave: function(text) {
   PhotoActions.updateText(this.props.photo.id, text);
   this.setState({
      isEditing: false
   });
},

_onDestroyClick: function() {
   PhotoActions.destroy(this.props.photo.id);
}

});

module.exports = PhotoItem;
