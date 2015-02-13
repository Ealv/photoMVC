define(['models/photoitem',
	'photocollectionview','handlebars',
	'text!./modules/viewer/templates/viewer.html'
	],
function(PhotoItem,	PhotoCollectionView, Handlebars, ViewerTemplate	){

	var ImageViewer = Backbone.Marionette.LayoutView.extend({
		template: Handlebars.compile(ViewerTemplate),
		regions: {
			gridviewer: "#gridviewer"
		},

		events: {
			"click #toggle-all"	: "sideToggleAll"
		},

		sideToggleAll: function(){
			var allChecked = $("#toggle-all").prop("checked");
			this.collection.map(function(photo){
				photo.set("selected", allChecked);
				//console.log( "iririri  : " + photo.get("url"));
				//photo.set("url", "toto");
				//photo.set("text", "toto");
			});
		},
		render: function(){
			// Using Underscore we can compile our template with data
			var data = {};
			var compiledTemplate = this.template;
			this.$el.append( compiledTemplate);

			this.collection = new Backbone.Collection({model: PhotoItem});
			this.collection.url = '/server/photos';
			this.collection.parse = function(data){return _.values(data);};
			this.collection.fetch();
			var collectionView = new PhotoCollectionView({collection:this.collection});
			this.gridviewer.show(collectionView);
		}
	});

	return new ImageViewer();
});