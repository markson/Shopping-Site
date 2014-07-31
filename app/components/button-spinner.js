export default Ember.Component.extend({
	classNames:['input-group-btn-vertical', 'spinner'],
	click: function(evt) {
		var classList;
		if(evt.target.tagName == 'I') {
			classList = evt.target.classList;
		} else if (evt.target.tagName == 'BUTTON') {
			classList = evt.target.firstElementChild.classList;
		};

		if($.inArray('fa-caret-up', classList) == 1) {
			this.sendAction('action','up');
		} else if($.inArray('fa-caret-down', classList) == 1) {
			this.sendAction('action','down');
		}
	}
})
