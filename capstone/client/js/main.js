/**** HELPERS ***/

Template.home.helpers({
	'displayItems': function() {
		return Items.find({});
	}
});



/*** EVENTS ***/

Template.navbar.events({
    "click .js-info-popout": function() {
        console.log("You wanted more info, here you go!");
        $('.description').toggle(900);
    },
    "click .close-desc": function() {
    	$('.description').toggle(900);
    }
});


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