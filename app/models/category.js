var Category = DS.Model.extend({
	category_name: DS.attr('string'),
	products: DS.hasMany('product', {async: true})

});

Category.reopenClass({
	FIXTURES: [
		{id: 1, category_name: 'featured products', products: [1, 2, 3]},
		{id: 2, category_name: 'printed cups', products:[4]},
		{id: 3, category_name: 'single wall cups', products:[1,2,3]}
	]
});

export default Category;


