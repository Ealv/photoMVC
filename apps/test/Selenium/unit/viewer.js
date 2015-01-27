var requirejs = require('requirejs');


var assert = require("assert")
/*
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})
*/


requirejs.config({
	baseUrl : "../marionette/src/",
	paths: {
		"moduleViewer" 				: "modules/viewer/main",
		"photoview"					: 'components/photo/js/v_photo',
		"photocollectionview"		: 'components/photo/js/c_photo',
		"app"						: './app',
		"jquery"					: '../bower_components/jquery/dist/jquery',
		"text"						: '../bower_components/text/text',
		"underscore"				: '../bower_components/underscore/underscore',
		"handlebars"				: '../bower_components/handlebars/handlebars',
		"backbone"					: '../bower_components/backbone/backbone',
		"marionette"				: "../bower_components/marionette/lib/backbone.marionette"
	}
});


console.log("toto");


return;
var moduleViwer = requirejs("moduleViewer");
		

console.dir(moduleViwer);


