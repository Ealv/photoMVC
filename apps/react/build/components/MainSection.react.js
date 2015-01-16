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
var PhotoItem = require('./PhotoItem.react');

var MainSection = React.createClass({displayName: 'MainSection',

  propTypes: {
    allPhotos: ReactPropTypes.object.isRequired,
    areAllComplete: ReactPropTypes.bool.isRequired
  },

  /**
   * @return {object}
   */
  render: function() {
    // This section should be hidden by default
    // and shown when there are Photos.
    if (Object.keys(this.props.allPhotos).length < 1) {
      return null;
    }

    var allPhotos = this.props.allPhotos;
    var photoss = [];

    for (var key in allPhotos) {
      photos.push(React.createElement(PhotoItem, {key: key, photo: allPhotos[key]}));
    }

    return (
      React.createElement("section", {id: "main"}, 
        React.createElement("input", {
          id: "toggle-all", 
          type: "checkbox", 
          onChange: this._onToggleCompleteAll, 
          checked: this.props.areAllComplete ? 'checked' : ''}
        ), 
        React.createElement("label", {htmlFor: "toggle-all"}, "Mark all as complete"), 
        React.createElement("ul", {id: "photo-list"}, photos)
      )
    );
  },

  /**
   * Event handler to mark all Photos as complete
   */
  _onToggleCompleteAll: function() {
    PhotoActions.toggleCompleteAll();
  }

});

module.exports = MainSection;