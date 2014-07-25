var Person = Ember.Object.extend({
	words:null,
	say: function(thing) {
		var name = this.get('name');
		return name + " says: " + thing;
	}
});

var Soldier = Person.extend({
	say: function (thing){
		this._super(thing + ", sir!");
	}
});

var yehuda = Soldier.create({
	name: 'Yehuda Katz'
});

export default Ember.ArrayController.extend({
	say: "Yes"
});


