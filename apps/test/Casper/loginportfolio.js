
var height = 1024;
var width = 1680;

var numberOftest = 6;


var urlStart = "http://localhost:8000/";
casper.test.begin('Loggin process can be done ', numberOftest, function (test) {
    casper.start(urlStart, function() {
      casper.evaluate(initializePage);

      test.assertEquals(casper.getCurrentUrl(), "http://localhost:8000/","url login is ok");

      //wait until backbone+marionette do thieir job on page
       casper.waitForSelector("#marionette",  function(){
        //test.assertExists('#user-input', "user inupt exist");
       // test.assertExists('#password-input', "password inupt exist");

        //change the viewport size for screenshot
        //nb screen shot via capser.capture is on then(function()) because we have to wait
        casper.viewport(width, height);
       });
    });
    casper.then(function() {
      //capture the while page
    casper.capture('screenshots/login.png');
      //capture only the application logo
    //  casper.captureSelector('screenshots/app-logo.png', '#app-logo');
        
      // Click on the login button
      casper.click('#marionette');
    });
    casper.then(function() {
        console.log("i capture marionette ");
        casper.waitForSelector("#left",  function(){ 
            casper.evaluate(initializePage);
            casper.capture('screenshots/marionette.png');
            casper.back();
        });   
    });
    casper.then(function() {
        casper.click('#angularjs');
    });
    casper.then(function() {
        console.log("i capture angular ");
        casper.waitForSelector(".ng-scope",  function(){
            casper.evaluate(initializePage);
            casper.capture('screenshots/angular.png');
            casper.back();
        });
        
    });
    /*
     casper.then(function() {
        casper.click('#react');
    });
    casper.then(function() {
        console.log("i capture react ");
        casper.waitForSelector("#photo-list",  function(){ 
            casper.capture('screenshots/react.png');
            casper.back();
        });
        
    });
*/
    casper.run(function() {
        test.done();
        //kill gently the browser
        setTimeout(function(){
            phantom.exit()
        }, 0);
    });
}); 


initializePage = function(){
    var style = document.createElement('style');
    var text = document.createTextNode('body { background: #fff;}');
    style.setAttribute('type', 'text/css');
    style.appendChild(text);
    document.head.insertBefore(style, document.head.firstChild);
};



/*
casper.on('page.initialized', function(){
    this.evaluate(function(){
        var isFunction = function(o) {
          return typeof o == 'function';
        };

        var bind,
          slice = [].slice,
          proto = Function.prototype,
          featureMap;

        featureMap = {
          'function-bind': 'bind'
        };

        function has(feature) {
          var prop = featureMap[feature];
          return isFunction(proto[prop]);
        }

        // check for missing features
        if (!has('function-bind')) {
          // adapted from Mozilla Developer Network example at
          // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind
          bind = function bind(obj) {
            var args = slice.call(arguments, 1),
              self = this,
              nop = function() {
              },
              bound = function() {
                return self.apply(this instanceof nop ? this : (obj || {}), args.concat(slice.call(arguments)));
              };
            nop.prototype = this.prototype || {}; // Firefox cries sometimes if prototype is undefined
            bound.prototype = new nop();
            return bound;
          };
          proto.bind = bind;
        }
    });
});

*/