/**** HELPERS ***/
Template.navbar.helpers({
	users: function() {
		return Meteor.users.find();
	}
});




/*** EVENTS ***/

Template.addNewItem.events({
	"click .js-open-form": function(e) {
		$('.newitem-form').toggle();
		$('button.btn.btn-primary.js-open-form').toggleClass('open-button');
	}

});

Template.home.events({
	'submit .searchItem'(event) {
		// Prevent default browser form submit
		event.preventDefault();

		// Get value from form element
		const target = event.target;
		const text = (target.text.value).toLowerCase();

		if (Items.find({itemName: text}).fetch().length > 0 ) {
			console.log(Items.find({itemName: text}).fetch());
			console.log("This is what you typed: " + text);
			return Items.find({itemName: text});
		} else {
			// $('.results').html("<h1>Nothing was found.</h1>");
			console.log("Nothing was found");
		}
 
		//Clear form
		target.text.value = '';
	},
});