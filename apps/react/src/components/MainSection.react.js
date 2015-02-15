var React = require('react');
var ReactPropTypes = React.PropTypes;
var PhotoActions = require('../actions/PhotoActions');
var PhotoGrid = require('./PhotoGrid.react');

/*
function getMainSectionState() {
	return {
		currentIndex: PhotoStore.getAll(),
		areAllChecked: PhotoStore.areAllChecked()
		};
	};
*/

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

				var NavBar = React.createClass({
						render: function() {
							return ( < ul className = "nav nav-tabs"
								id = "myTab" >
								< li className = "active" > < a href = "#home" > Home < /a></li >
								< li > < a href = "#profile" > Profile < /a></li >
								< /ul>);
							}
						});

					var NavContent = React.createClass({
						render: function() {
							return ( < div className = "tab-content" >
								< div className = "tab-pane fade in active"
								id = "home" >
								< PhotoGrid allPhotos = {
									this.props.allPhotos
								}
								areAllChecked = {
									this.props.areAllChecked
								} >
								< /PhotoGrid> < /div > < div className = "tab-pane"
								id = "profile" >
								ttttt < /div>	 < /div > );
						}
					});
					return ( < div >
						< NavBar color = "grey" > < /NavBar> < NavContent color = "grey"
						allPhotos = {
							this.props.allPhotos
						}
						areAllChecked = {
							this.props.areAllChecked
						} >
						< /NavContent> < /div > );
				}
			});

		module.exports = MainSection;
