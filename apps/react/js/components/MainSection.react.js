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

var MainSection = React.createClass({

  propTypes: {
    allPhotos: ReactPropTypes.object.isRequired,
    areAllChecked: ReactPropTypes.bool.isRequired
  },

  /**
   * @return {object}
   */
  render: function() {
    // This section should be hidden by default
    // and shown when there are Photos.
    if (Object.keys(this.props.allPhotos).length < 1)
      return null;

    var allPhotos = this.props.allPhotos;
    var photos = [];
    for (var key in allPhotos)
      photos.push(<PhotoItem key={key} photo={allPhotos[key]} />);


    return (
      <section id="main" >
        <input
          id="toggle-all"
          type="checkbox"
          onChange={this._onToggleCheckAll}
          checked={this.props.areAllChecked ? 'checked' : ''}
        />
        <label htmlFor="toggle-all">Mark all as checked</label>
          <ul id="photo-list" >
            <div className="row">
              {photos}
            </div>
          </ul>
        
      </section>
    );
  },

  /**
   * Event handler to mark all Photos as complete
   */
  _onToggleCheckAll: function() {
    PhotoActions.toggleCheckAll();
  }

});

module.exports = MainSection;