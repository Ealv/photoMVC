var React = require('react');
var ReactPropTypes = React.PropTypes;
var PhotoActions = require('../actions/PhotoActions');
var PhotoItem = require('./PhotoItem.react');

var PhotoGrid = React.createClass({
	propTypes: {
		allPhotos: ReactPropTypes.object.isRequired,
		areAllChecked: ReactPropTypes.bool.isRequired
	},
	render: function() {
		var allPhotos = this.props.allPhotos;
		var photos = [];
		for (var key in allPhotos)
			photos.push(<PhotoItem key={key} photo={allPhotos[key]} />);

		return (<section id="main" >
			<input id="toggle-all" type="checkbox" onChange={this._onToggleCheckAll} checked={this.props.areAllChecked ? 'checked' : ''}/>
			<label htmlFor="toggle-all">Mark all as checked</label>
			<ul className="grid-photo" >
				<div className="row">
				{photos}
				</div>
			</ul>
		</section>);
	},
	/**
	* Event handler to mark all Photos as complete
	*/
	_onToggleCheckAll: function() {
		PhotoActions.toggleCheckAll();
	}
});

module.exports = PhotoGrid;