define(['backbone'], 
	function(Backbone){
		var PhotoItem = Backbone.Model.extend({
			defaults: {
				"text": "none",
				"url" : "/server/img/photos/0038eac9-965b-46df-a230-ac0dcf0c8ee1.JPG"
			}
		});
	return PhotoItem;
});