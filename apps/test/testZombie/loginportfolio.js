process.env.NODE_ENV = 'test';
//var app = require('../../server');
// use zombie.js as headless browser
var Browser = require('zombie');
//var Browser = require('phantom');
var assert = require('assert');

describe('login zombie page', function() {

	it('should propose angular, react and backbone marionette',function(done){
	Browser.localhost('http://localhost/', 8000);
	var browser = Browser.create();

	browser.visit('http://localhost:8000/', function() {
		console.log("body " + browser.body);
		console.log("url  " + browser.url);
		//Browser.localhost('http://localhost/', 8000);
  		assert.equal(browser.text('h2'), 'coucou');
  		
  	});
	done();
});


});