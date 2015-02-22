var should = require('should');
var request = require('supertest');

// testing api from server/services.js
// @TODO add a coverage node plugin to validate the photo API

describe('Routing', function() {
	var url = 'localhost:8000';

	describe('GET some photos photo', function() {
		it('Should return a list of photos', function(done) {
			request(url)
				.get('/services/photos')
				.expect('Content-Type', /json/)
				.expect(200)
				.end(function(err, res) {
					if (err) {
						console.log("????????????????server nose is up ??????????????");
						throw err;
					}
					res.body.length.should.not.equal(0, " we have some photos in portfolio");
					res.status.should.equal(200, "no error code for get list");
					done();
				});
		});
	});

	describe('GET a photo from server photo', function() {
		var idPhoto = "photo.JPG";

		it('Should return a photo', function(done) {
			request(url)
				.get('/services/photos/' + idPhoto)
				.expect('Content-Type', /json/)
				.expect(200)
				.end(function(err, res) {
					if (err) {
						console.log("????????????????server nose is up ??????????????");
						throw err;
					}
					var photo = res.body;
					photo.id.should.equal(idPhoto, " we get the good id for photo");
					//photo.title.should.equal("Head to head", "the name must be ok");
					res.status.should.equal(200, "no error code for get list");
					done();
				});
		});
	});

	describe('DELETE an  photo', function() {
		var idPhoto = "IMG_20131219_141016.jpg";
		it('Should return a 200  ', function(done) {
			request(url)
				.delete('/services/photos/' + idPhoto)
				.expect('Content-Type', /json/)
				.expect(200)
				.end(function(err, res) {
					if (err) {
						console.log("????????????????server nose is up ??????????????");
						throw err;
					}
					done();
				});
		});
	});
});
