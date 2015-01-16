define(['marionette','controller'], function(Marionette,myController){
	var Router = Marionette.AppRouter.extend({
		controller: myController,
		appRoutes: {
			""			: "login",
			"login"		: "login",
			"home"		: "home"
		}
	});
	return Router;
});

