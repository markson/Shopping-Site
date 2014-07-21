window.App = Em.Application.create({
  LOG_TRANSITIONS: true
});

App.App.Router.map(function() {
  return this.route('index', {
    path: '/'
  });
});
