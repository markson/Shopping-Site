import Resolver from 'ember/resolver';

var App = Ember.Application.extend({
  LOG_TRANSITIONS: true,
  modulePrefix:'appkit',
  Resolver: Resolver['default']
});

export default App;
