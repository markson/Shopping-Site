export default Ember.Route.extend({
	model: function() {
		return ['red', 'yellow', 'blue'];
	},
	setupController: function(controller, model) {
		controller.set('newArrival', this.store.find('product'));
	}
});

