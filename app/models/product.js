var Product =  DS.Model.extend({
	name: DS.attr('string'),
	description: DS.attr('string')
});

Product.reopenClass({
	FIXTURES: [
		{id: 1, name:'Short - 8 oz', description:"This is the smallest size that Starbucks offers. It’s not very commonly ordered, and you can only get hot drinks in a Short size."},
		{id: 2, name:'Tall - 12 oz', description:"Tall is considered to be a “small” sized drink. A medium size at Tim Hortons in Canada is 10 oz, or 14 oz in the U.S."},
		{id: 3, name:'Grande - 16 oz', description:"Pronounced “GRAWN-day”. A Large Tim Hortons coffee is between 14 and 20 oz."}
	]
});
export default Product;
