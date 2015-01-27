define(['models/photoitem','photocollectionview'],
function(PhotoItem,PhotoCollectionView){
	var collection = new Backbone.Collection({model: PhotoItem});
	collection.url = '/server/photos';
	collection.parse = function(data){return _.values(data);};
	collection.fetch();
	return new PhotoCollectionView({collection:collection});
});