export default Ember.ArrayController.extend({
	actions: {
		generateInvoice: function() {
			var store = this.store
			store.find('product', 1).then(function(obj){
				var cup_1_amount = obj.get('amount');
				store.find('product', 2).then(function(obj){
				var cup_2_amount = obj.get('amount');
				store.find('product', 3).then(function(obj){
				var cup_3_amount = obj.get('amount');
				$.post(location.protocol+'//'+location.host +'/invoice',{
					cup_1: cup_1_amount,
					cup_2: cup_2_amount,
					cup_3: cup_3_amount
					} ).done(function(data){
						alert("老余 the invoice has sent to your email");
					});
			});
			});
		});
		}
	}
});
