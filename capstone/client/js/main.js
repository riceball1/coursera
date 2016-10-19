/**** HELPERS ***/

Template.home.helpers({
	'displayItems': function() {
		return Items.find();
	}
});





/*** EVENTS ***/

Template.navbar.events({
    "mouseenter .js-info-popout": function(e) {
        console.log("You wanted more info, here you go!");
        $('.description').toggle(900);
    }
});

Template.home.events({
	'submit .searchItem'(event) {
		// Prevent default browser form submit
		event.preventDefault();

		// Get value from form element
		const target = event.target;
		const text = target.text.value;

		// Use value to search db for a matching page
		Meteor.call('findItem', text);
		console.log("This is what you typed: " + text);

		//Clear form
		target.text.value = '';
	},
});