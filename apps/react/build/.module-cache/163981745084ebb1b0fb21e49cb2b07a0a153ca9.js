var Photo = React.createClass({displayName: 'Photo',
	getInitialState: function() {
		return {
			url: "lib/react-0.12.1/examples/ballmer-peak/ballmer_peak.png"
		};
	},

	handleChange: function() {
		this.setState({url: this.state.url});
	},

	//the name of the file based on url (no extension, no path)
	getTinyName: function() {
		var splittedOverSlash = this.state.url.split("/");
		if(splittedOverSlash.length){
			var fileName = splittedOverSlash[splittedOverSlash.length - 1];
			var splittedOverDot = fileName.split(".");
			if(splittedOverDot.length)
				return splittedOverDot[0];
			return fileName;
		}
		return this.state.url;
	},

	render: function() {
		console.log("render at " + this.props.date_begin);
		var fileName = this.getTinyName();
		return (
			React.createElement("div", {className: "pict"}, 
				React.createElement("img", {src: this.state.url}), 
				React.createElement("div", null, fileName), 
				React.createElement("button", {onClick: this.handleChange, className: "btn-default"}, "Re-render")
			)
		);
	}
});



var PhotoGrid = React.createClass({displayName: 'PhotoGrid',
    render: function() {
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach(function(product) {
            if (product.category !== lastCategory) {
                rows.push(React.createElement(ProductCategoryRow, {category: product.category, key: product.category}));
            }
            rows.push(React.createElement(Photo, {photo: product, key: product.name}));
            lastCategory = product.category;
        });
        return (
            React.createElement("table", null, 
                React.createElement("thead", null, 
                    React.createElement("tr", null, 
                        React.createElement("th", null, "Name"), 
                        React.createElement("th", null, "Price")
                    )
                ), 
                React.createElement("tbody", null, rows)
            )
        );
    }
});


var collectionPhoo = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];


React.render(React.createElement(Photo, {date_begin: new Date().getTime()}),document.getElementById('container'));