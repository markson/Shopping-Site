export default Ember.ObjectController.extend({
	url: function(){
		return 'img/cup-' + this.get('id') + '.jpg';
	}.property('id'),
	alt: function() {
		return 'This is the description of cup' + this.get('id');
	}.property('id'),
	amount: 10,
	actions: {
		increaseAmount: function(upOrDown) {
			if(upOrDown == 'up') {
				this.incrementProperty('amount');
			} else if(upOrDown == 'down') {
				this.decrementProperty('amount');
			}
		}
	}
});
