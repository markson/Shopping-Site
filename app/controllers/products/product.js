export default Ember.ObjectController.extend({
	url: function(){
		return 'img/cup-' + this.get('id') + '.jpg';
	}.property('id'),
	alt: function() {
		return 'This is the description of cup' + this.get('id');
	}.property('id')
})
