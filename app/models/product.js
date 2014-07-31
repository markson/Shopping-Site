var Product =  DS.Model.extend({
	name: DS.attr('string'),
	description: DS.attr('string'),
	amount: DS.attr('number')
});

Product.reopenClass({
	FIXTURES: [
		{id: 1, name:'Short - 8 oz', description:"This is the smallest size that Starbucks offers. It’s not very commonly ordered, and you can only get hot drinks in a Short size.", amount:0},
		{id: 2, name:'Tall - 12 oz', description:"Tall is considered to be a “small” sized drink. A medium size at Tim Hortons in Canada is 10 oz, or 14 oz in the U.S.", amount:0},
		{id: 3, name:'Grande - 16 oz', description:"Pronounced “GRAWN-day”. A Large Tim Hortons coffee is between 14 and 20 oz.", amount:0}
	]
});
export default Product;
