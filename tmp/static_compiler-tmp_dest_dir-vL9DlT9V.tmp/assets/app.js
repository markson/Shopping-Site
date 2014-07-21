import Resolver from 'ember/resolver';

var App = Ember.Application.extend({
  LOG_TRANSITIONS: true,
  Resolver: Resolver['default']
});

export default App;
