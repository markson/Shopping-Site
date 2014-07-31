export default Ember.ArrayController.extend({
	actions: {
		generateInvoice: function() {
			var cup_1_amount;
			var cup_2_amount;
			var cup_3_amount;
			this.store.find('product', 1).then(function(obj){
				cup_1_amount = obj.get('amount');
			});
			this.store.find('product', 2).then(function(obj){
				cup_1_amount = obj.get('amount');
			});
			this.store.find('product', 3).then(function(obj){
				cup_1_amount = obj.get('amount');
			});

			$.post('http://cage.mko.io',{
					cup_1: cup_1_amount,
					cup_2: cup_2_amount,
					cup_3:cup_3_amount
					} ).done(function(data){
						alert("老余 the invoice has sent to your email");
					})
			// this.store.createRecord('product', {
			// 	name:'Gulp',
			// 	description:'Huge',
			// 	amount:1
			// });
		}
	}
});
