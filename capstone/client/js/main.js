/**** HELPERS ***/

// Template.home.helpers({
// 	'displayItems': function() {
// 		return Items.find();
// 	}
// });



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
		const text = (target.text.value).toLowerCase();

		if (Items.find({itemName: text}).fetch().length > 0 ) {
			// $('.results').text((Items.findOne({itemName: text}));
			var item_name = Items.findOne({itemName: text}).itemName;
			var item_description = Items.findOne({itemName: text}).description;
			var item_image = Items.findOne({itemName: text}).image;
			var item_title = Items.findOne({itemName: text}).title;
			
			$('.name').text(item_name);
			$('.desc').text(item_description);
			$('.itemImage').attr("src", item_image);
			$('.itemImage').toggle();
			console.log("This is what you typed: " + text);
		} else {
			$('.name').text("Nothing was found.");
			$('.desc').text("");
			console.log("Nothing was found");
			console.log(Items.find({itemName: text}).fetch().length);
		}
 
		//Clear form
		target.text.value = '';
	},
});