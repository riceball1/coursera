Meteor.methods({

	// methods
	'item.insert': function(itemName, imgURL, description) {
		check(itemName, String);
		check(description, String);

		// make sure user is logged in
		if (!this.userId) {
			throw new Meteor.Error ("You are missing information", "Cannot complete adding new item");
		} else {
			// insert items into the database
		  	Items.insert({
		      itemName: itemName, 
		      description: description, 
		      image: imgURL,
		    });
		}
		return;
	}

})