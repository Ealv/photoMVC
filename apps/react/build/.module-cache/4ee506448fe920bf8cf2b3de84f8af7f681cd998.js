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

var PhotoItem = React.createClass({displayName: 'PhotoItem',

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
    var photo = this.props.photo;

    var input;
    if (this.state.isEditing) {
      input =
        React.createElement(PhotoTextInput, {
          className: "edit", 
          onSave: this._onSave, 
          value: photo.text}
        );
    }

    // List items should get the class 'editing' when editing
    // and 'completed' when marked as completed.
    // Note that 'completed' is a classification while 'complete' is a state.
    // This differentiation between classification and state becomes important
    // in the naming of view actions toggleComplete() vs. destroyCompleted().
    return (
      React.createElement("li", {
        className: cx({
          'completed': photo.complete,
          'editing': this.state.isEditing
        }), 
        key: photo.id}, 
        React.createElement("div", {className: "view"}, 
          React.createElement("input", {
            className: "toggle", 
            type: "checkbox", 
            checked: photo.complete, 
            onChange: this._onToggleComplete}
          ), 
          React.createElement("label", {onDoubleClick: this._onDoubleClick}, 
            photo.text
          ), 
          React.createElement("button", {className: "destroy", onClick: this._onDestroyClick})
        ), 
        input
      )
    );
  },

  _onToggleComplete: function() {
    PhotoActions.toggleComplete(this.props.photo);
  },

  _onDoubleClick: function() {
    this.setState({isEditing: true});
  },

  /**
   * Event handler called within PhotoTextInput.
   * Defining this here allows PhotoTextInput to be used in multiple places
   * in different ways.
   * @param  {string} text
   */
  _onSave: function(text) {
    PhotoActions.updateText(this.props.photo.id, text);
    this.setState({isEditing: false});
  },

  _onDestroyClick: function() {
    PhotoActions.destroy(this.props.photo.id);
  }

});

module.exports = PhotoItem;