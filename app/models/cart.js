var Cart =  DS.Model.extend({
	customer_name: DS.attr('string'),
	cup_1: DS.attr('number'),
	cup_2: DS.attr('number'),
	cup_e: DS.attr('number')

});

export default Cart;
