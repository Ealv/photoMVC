
var React = require('../node_modukes/react');

var TodoApp = require('./components/PhotoApp.react');

React.render(
  React.createElement(TodoApp, null),
  document.getElementById('photoapp')
);

/*
return;

var Photo = React.createClass({
	getInitialState: function() {
		return {
			//url: "lib/react-0.12.1/examples/ballmer-peak/ballmer_peak.png"
			url: "toto"
		};
	},

	handleChange: function() {
		this.setState({url: this.state.url});
	},

	//the name of the file based on url (no extension, no path)
	getTinyName: function() {
		var splittedOverSlash = this.state.url.split("/");
		if(splittedOverSlash.length){
			var fileName = splittedOverSlash[splittedOverSlash.length - 1];
			var splittedOverDot = fileName.split(".");
			if(splittedOverDot.length)
				return splittedOverDot[0];
			return fileName;
		}
		return this.state.url;
	},

	render: function() {
		var fileName = this.getTinyName();
		return (
			<div className="pict">
				<img src={this.props.url} />
				<div>{fileName}</div>
			</div>
		);
	}
});

var PhotoGrid = React.createClass({

	getInitialState: function() {
		return {
			username: '',
			url: ''
		};
	},
	render: function() {
		var rows = [];
		this.props.photos.forEach(function(photoModel) {
			rows.push(<Photo url={photoModel.url} key={photoModel.url} />);
		});
		return (
			<div className="phototo">
				{rows}
				<button onClick={this.handleChange} className="btn-default">Re-render</button>
			</div>
		);
	},
	
	componentDidMount: function() {
		alert("cocuouc");
		$.get(this.props.photos, function(result) {
		var lastGist = result[0];
		if (this.isMounted()) {
			this.setState({
			username: lastGist.owner.login,
			lastGistUrl: lastGist.html_url
			});
		}
	}.bind(this));
	}
});

//var collectionPhotos = [
//	{url: 'http://www.flickr.com/photos/redisdead/11859561736/'				,	name: 'Football'},
//	{url: 'http://farm3.staticflickr.com/2877/11878050486_ffc84342f6_b.jpg'	,  	name: 'Baseball'},
//	{url: 'http://farm6.staticflickr.com/5544/11885543615_4b41886ea8_b.jpg'	, 	name: 'Basketball'},
//	{url: 'http://farm4.staticflickr.com/3674/11914541585_dd01bf39e1_b.jpg'	, 	name: 'iPod Touch'}
//];



React.render(<PhotoGrid photos="http://localhost:8000/server/photosinit.jsn" />, document.getElementById('container'));



*/