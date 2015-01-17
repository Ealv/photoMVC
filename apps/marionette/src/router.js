define(['marionette','controller'], function(Marionette,myController){
	var Router = Marionette.AppRouter.extend({
		controller: myController,
		appRoutes: {
			""		: "home",
			"whatever"	: "whatever",
			"home"	: "home"
		}
	});
 return Router;
});
