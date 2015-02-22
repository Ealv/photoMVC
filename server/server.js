var express = require('express'),
	app = express();

var server = require('http').createServer(app);
server.listen(8000);

var path = require("path");
var _ = require('underscore');

///////////////////////////////service server ////////////////////////////////////:
var services = require('./services');
app.route('/services/photos/:id')
	.get(function(req, res) {
		services.actions.getPhoto(req, res);
		//res.send('Get a random book');
	})
	.post(function(req, res) {
		services.actions.addPhoto(req, res);
	})
	.put(function(req, res) {
		services.actions.updatePhoto(req, res);
	}).delete(function(req, res) {
		services.actions.deletePhoto(req, res);
	});

app.route('/services/photos/')
	.get(function(req, res) {
		services.actions.getPhotos(req, res);
	});

///////////////////////////////static files server////////////////////////////////////:

var appsDir = path.join(__dirname, '..', "apps");

app.get('/', function(req, res) {
	res.sendFile(appsDir + "/index.html");
});

app.use("/angular/", function(req, res, next) {
	res.sendFile(appsDir + req.client._httpMessage.req.originalUrl);
});

app.use("/marionette/", function(req, res, next) {
	res.sendFile(appsDir + req.client._httpMessage.req.originalUrl);
});

app.use("/react/", function(req, res, next) {
	res.sendFile(appsDir + req.client._httpMessage.req.originalUrl);
});

app.use("/apps/", function(req, res, next) {
	res.sendFile(appsDir + req.client._httpMessage.req.originalUrl);
});

app.use("/css", function(req, res, next) {
	var fileName = appsDir + req.client._httpMessage.req.originalUrl;
	var splitting = fileName.split("?");
	if (splitting.length)
		fileName = splitting[0];
	console.log("try to send file " + fileName);
	res.sendFile(fileName);
});

app.use("/locales", function(req, res, next) {
	var fileName = req.client._httpMessage.req.originalUrl;
	var splitting = fileName.split("?");
	if (splitting.length)
		fileName = splitting[0];
	res.sendFile(appsDir + fileName);
});

app.use("/fonts", function(req, res, next) {
	res.sendFile(path.join(appsDir, "bower_components/bootstrap", decodeURI(req.client._httpMessage.req.originalUrl)));
});

app.use("/assets", function(req, res, next) {
	res.sendFile(appsDir + req.client._httpMessage.req.originalUrl);
});

app.use("/bower_components/", function(req, res, next) {
	res.sendFile(appsDir + req.client._httpMessage.req.originalUrl);
});

//this must be done into photo services.
app.use("/server/img/photos/", function(req, res, next) {
	try {
		var fs = require('fs');
		var path = require('path');
		var pathFile = path.join(__dirname, '..', decodeURI(req.client._httpMessage.req.originalUrl));
		var fileDir = path.dirname(pathFile);
		var fileBase = path.basename(pathFile);

		var imageOrigin = fileDir + "/" + fileBase;
		var imageThumb = fileDir + "/thumbs/" + fileBase;

		if (!fs.existsSync(fileDir + "/thumbs/")) {
			fs.mkdir(fileDir + "/thumbs/");
		}

		if (!fs.existsSync(imageThumb)) {
			var gm = require('gm');
			gm(imageOrigin)
				.options({
					imageMagick: true
				})
				.resize(120, 120)
				.write(imageThumb,
					function(err) {
						if (err) console.dir(err);
						console.log("convert " + imageOrigin + " from  " + imageThumb);
						res.sendFile(imageThumb);
					});
		} else {
			res.sendFile(imageThumb);
		}
	} catch (exception) {
		console.dir(exception);
		res.setHeader('Content-Type', 'text/plain');
		res.sendStatus(404);
	}
});

app.use(function(req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	console.log("not founcd " + req.client._httpMessage.req.originalUrl);
	res.sendStatus(404);
});
