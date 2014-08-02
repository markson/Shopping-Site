export default Ember.Controller.extend({
	actions: {
		login: function() {
			var data = this.getProperties('userId', 'password');
			var self = this;
			Ember.$.post('/auth.json', data).then(function(response) {
				self.set('errorMessage', 'Something wrong');
				if(response.sucess) {
					self.set('token', response.token);
				}
			})
		}
	}
})
