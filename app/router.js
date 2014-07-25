var Router = Ember.Router.extend();

Router.map(function(){
	this.resource('products', function(){
	});
	this.route('contact');
	this.route('about');
})

export default Router
