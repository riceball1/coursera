
/*** EVENTS ***/ //

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

		// Find item in the collection
		// Meteor.call('name');

		//Clear form
		target.text.value = '';
	}
});