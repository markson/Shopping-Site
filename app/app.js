import Resolver from 'ember/resolver';
Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  LOG_TRANSITIONS: true,
  modulePrefix:'appkit',
  Resolver: Resolver['default']
});




export default App;
