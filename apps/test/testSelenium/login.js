/**
author : eal
how to use :
mocha testSelenium/*
**/

var driver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var assert = require("assert");

/**
method to take a snapshot.
if you want to take a sanpa shot of a pariculary element...
well...
http://stackoverflow.com/questions/13832322/how-to-capture-the-screenshot-of-only-a-specific-element-using-selenium-webdrive
**/
var captureScreen = function(browser,name,element) {
	browser.takeScreenshot().then(function(image, err){
		require('fs').writeFile(name, image, 'base64', function(err) {
			if(err)console.log(err);
		});
	});
};

var capabilities = {
	//silent: true, // maybe output more for tests?
	//browserName: 'phantomjs',
	browserName: 'firefox',
	javascriptEnabled: true,
	takesScreenshot: true,
	databaseEnabled: false,
	cssSelectorsEnabled:true,
	webStorageEnabled: true
};

testLogin = function(){
	this.timeout(15000);
	before ( function () {
		createClient(onBrowserReady);
	});

	test.it('must have a login button', function(){
		this.timeout(9000);
		browser.manage().timeouts().implicitlyWait(2000);
		browser.get('http://localhost:8000');

		//browser.findElement(driver.By.id('marionette')).click();

		//login form is ok
		browser.findElement(driver.By.id('user-input'));
		browser.findElement(driver.By.id('password-input'));

		browser.findElement(driver.By.id('login-button'));

		//browser.wait(function() {return browser.executeScript(function () {return !!document.querySelector('#login-button');});}, 2000);

		captureScreen(browser,pathScreenshots + "/login.png");
		browser.findElement(driver.By.id('login-button')).click();

	});

};


testApp = function(){
	//this.timeout(15000);
/*	before ( function () {
		//testLogin();
		//createClient(onBrowserReady);
	});
*/
	after ( function () {
		browser.quit();
	});

	test.it('app button', function(){
		browser.getCurrentUrl().then(
			function(url){
				browser.findElement(driver.By.id('main-layout'));
				assert.equal(true,true,"main layout found ");
				captureScreen(browser,pathScreenshots + "/home.png");
				//console.log("app url ");
					/*
		browser.wait(
			function waitUntilAllimagesAreDownloaded() {
				return browser.executeScript(function () {
					var allImages = document.querySelectorAll('.article .image img');
					//2 convert it to a propoer array (for following sugar method "some")
					var allImages = [].slice.call(allImages);
					//3 check for all images to be loaded with the "some" method (image is loaded if it has width)
					return allImages.some(function(image){return (image.offsetWidth > 0);});
		})}, 2000);
		*/
		
				//assert.equal(true,true,url);
			});
	});
};

var library = "marionette";
var pathScreenshots = "screenshots/" + library;

//test the login page
test.describe('login',testLogin);

test.describe('app',testApp);


/**
  the (time consuming) task about creating a browser instance (perticulary
for Firefox or IE)
**/
function createClient( callBack) {
	browserDone = new driver.Builder().withCapabilities(capabilities).build();
	if (typeof callBack === 'function') {
		return callBack (browserDone);
	} else if ( typeof callBack === 'object' && typeof callBack.resolve ===
	'function' ) {
		return callBack.resolve( browserDone );
	} else {
		return browserDone;
	}
};

var browser;
var onBrowserReady = function ( browserDone ) {
	if (!browserDone)
		throw new Error ('driver not created');
	browser = browserDone;
	browser.manage().timeouts().implicitlyWait(1000);
	browser.manage().window().setSize(680, 700);
};