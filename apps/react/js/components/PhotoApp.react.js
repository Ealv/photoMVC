
/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the TodoStore and passes the new data to its children.
 */

var Footer = require('./Footer.react');
var Header = require('./Header.react');
var MainSection = require('./MainSection.react');
var React = require('react');
var PhotoStore = require('../stores/PhotoStore');

	/**
	* Retrieve the current TODO data from the TodoStore
	*/
	function getPhotoState() {
	return {
		allPhotos: PhotoStore.getAll(),
		areAllChecked: PhotoStore.areAllChecked()
		};
	};

var PhotoApp = React.createClass({

	getInitialState: function() {
		return getPhotoState();
	},

	componentDidMount: function() {
		PhotoStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		PhotoStore.removeChangeListener(this._onChange);
	},


	/**
	 * @return {object}
	 */
	render: function() {
		console.log("render!");
			return (
			//	React.createElement("div", null,
				 React.createElement(MainSection, {
					allPhotos: this.state.allPhotos,
					areAllChecked: this.state.areAllChecked}
				)
			// )
		);
	},

	/**
	 * Event handler for 'change' events coming from the PhotoStore
	 */
	_onChange: function() {
		this.setState(getPhotoState());
	}

});

module.exports = PhotoApp;