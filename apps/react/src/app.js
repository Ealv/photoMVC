var React = require('react');

var BootStrap = require('../../bower_components/bootstrap');

var PhotoApp = require('./components/PhotoApp.react');

var request = require('superagent');
var url = "http://localhost:8000/services/photos/";

var myReq = request.get(url).end(function(response) {
	var PhotoActions = require('./actions/PhotoActions');
	PhotoActions.createAll(response.body);
});

//logic about main layout

$('#myTab a').click(function(e) {
	e.preventDefault();
	console.log("tab ok click");
	$(this).tab('show');
});

$("#toggle-siderbar-header").click(function() {
	$("#middle-layout").toggleClass("toggle-sidebar");
});
$("#toggle-inner-siderbar").click(function() {
	$("#middle-layout").toggleClass("toggle-sidebar");
});
$("#blur-layout").click(function() {
	$("#middle-layout").toggleClass("toggle-sidebar");
});

React.render( <PhotoApp/> , document.getElementById('photoapp'));
