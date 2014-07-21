window.App = Em.Application.create {
  LOG_TRANSITIONS: true
}

App.

App.Router.map ->
  this.route('index', {path: '/'})
  # this.route('test', {path: '/test'})

