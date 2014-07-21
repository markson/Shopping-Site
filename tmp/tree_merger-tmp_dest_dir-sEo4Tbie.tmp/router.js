var Router = Ember.Router.extend();

Router.map(function(){
	this.route('index', {path:'/'});
	this.route('test', {path:'/test'});
})

export default Router
