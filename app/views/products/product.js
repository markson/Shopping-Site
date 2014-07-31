import ProductView from 'appkit/templates/products/product'

export default Ember.View.extend({
	afterRenderEvent: function() {
		var self = this;
		$('.spinner .btn:first-of-type').on('click', function() {
			self.incrementProperty('amount');
		});
		$('.spinner .btn:last-of-type').on('click', function() {
			self.decrementProperty('amount');
		});

	},
	template: ProductView
});
