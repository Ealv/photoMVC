var express = require('express'),
	app = express();

var server = require('http').createServer(app);
server.listen(8000);

var path = require("path");

//resolving path on apps 
__dirname = path.join(__dirname, '..', "apps");

app.get('/', function(req, res) {
	//console.log("ask for "  + req.client._httpMessage.req.originalUrl)
	res.sendFile(__dirname + "/index.html");
});

app.use("/angular/", function(req, res, next) {
	res.sendFile(__dirname + req.client._httpMessage.req.originalUrl);
});

app.use("/marionette/", function(req, res, next) {
	res.sendFile(__dirname + req.client._httpMessage.req.originalUrl);
});

app.use("/react/", function(req, res, next) {
	res.sendFile(__dirname + req.client._httpMessage.req.originalUrl);
});

app.use("/apps/", function(req, res, next) {
	res.sendFile(__dirname + req.client._httpMessage.req.originalUrl);
});

app.use("/css", function(req, res, next) {
	var fileName = __dirname + req.client._httpMessage.req.originalUrl;
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
	res.sendFile(__dirname + fileName);
});

app.use("/fonts", function(req, res, next) {
	res.sendFile(path.join(__dirname, "bower_components/bootstrap", decodeURI(req.client._httpMessage.req.originalUrl)));
});

app.use("/assets", function(req, res, next) {
	res.sendFile(__dirname + req.client._httpMessage.req.originalUrl);
});

app.use("/bower_components/", function(req, res, next) {
	res.sendFile(__dirname + req.client._httpMessage.req.originalUrl);
});

app.use("/server/photos", function(req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	var walk = require('walk');
	var files = {};

	// Walker options
	var walker = walk.walk('../server/img/photos/', {
		followLinks: false
	});

	walker.on('file', function(root, stat, next) {
		files[stat.name] = {
			url: '/server/img/photos/' + encodeURI(stat.name),
			text: stat.name
		};
		next();

	});
	walker.on('end', function() {
		res.send(files);
	});
});

app.use("/server/img/photos/", function(req, res, next) {
	try {
		//console.dir(req.client._httpMessage.req);
		var fs = require('fs');
		var path = require('path');
		//var bebforeName = __dirname;
		//hiii dirty hack
		//__dirname = );

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
	};
	//hiii dirty hack...
	//__dirname = bebforeName;
});

app.use(function(req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	console.log("not founcd " + req.client._httpMessage.req.originalUrl);
	res.sendStatus(404);
});
