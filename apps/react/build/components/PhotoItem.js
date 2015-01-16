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
var TodoActions = require('../actions/PhotoActions');
var TodoTextInput = require('./PhotoTextInput.react');

var cx = require('react/lib/cx');

var PhotoItem = React.createClass({displayName: 'PhotoItem',

  propTypes: {
   todo: ReactPropTypes.object.isRequired
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
    var todo = this.props.todo;

    var input;
    if (this.state.isEditing) {
      input =
        React.createElement(TodoTextInput, {
          className: "edit", 
          onSave: this._onSave, 
          value: todo.text}
        );
    }

    // List items should get the class 'editing' when editing
    // and 'completed' when marked as completed.
    // Note that 'completed' is a classification while 'complete' is a state.
    // This differentiation between classification and state becomes important
    // in the naming of view actions toggleComplete() vs. destroyCompleted().

/*
    render: function() {
    console.log("render at " + this.props.date_begin);
    var fileName = this.getTinyName();
    return (
      React.createElement("div", {className: "pict"}, 
        React.createElement("img", {src: this.state.url}), 
        React.createElement("div", null, fileName), 
        React.createElement("button", {onClick: this.handleChange, className: "btn-default"}, "Re-render")
      )
    );
  }
  */
    return (
      React.createElement("li", {
        className: cx({
          'completed': todo.complete,
          'editing': this.state.isEditing
        }), 
        key: todo.id}, 
        React.createElement("div", {className: "view"}, 
          React.createElement("input", {
            className: "toggle", 
            type: "checkbox", 
            checked: todo.complete, 
            onChange: this._onToggleComplete}
          ), 
          React.createElement("label", {onDoubleClick: this._onDoubleClick}, 
            todo.text
          ), 
          React.createElement("button", {className: "destroy", onClick: this._onDestroyClick})
        ), 
        input
      )
    );
  },

  _onToggleComplete: function() {
    TodoActions.toggleComplete(this.props.todo);
  },

  _onDoubleClick: function() {
    this.setState({isEditing: true});
  },

  /**
   * Event handler called within TodoTextInput.
   * Defining this here allows TodoTextInput to be used in multiple places
   * in different ways.
   * @param  {string} text
   */
  _onSave: function(text) {
    TodoActions.updateText(this.props.todo.id, text);
    this.setState({isEditing: false});
  },

  _onDestroyClick: function() {
    TodoActions.destroy(this.props.todo.id);
  }

});

module.exports = PhotoItem;