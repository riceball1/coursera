import { Session } from 'meteor/session';

/**** HELPERS ***/
Template.navbar.helpers({
	users: function() {
		return Meteor.users.find();
	}
});

Template.profile.helpers({
	users: function() {
		return Meteor.users.find();
	},

});

// search functions

Template.itemsList.helpers({
	items: function() {
		var text = Session.get('searchWord');
		sessionStorage.removeItem('searchWord');
		return Items.find({itemName: text});
	}
});

Template.home.events({
	'keypress #search': function(event) {
		if(event.which === 13) {
			event.preventDefault();
			var keyword = event.target.value;
			console.log(keyword);
			Session.set('searchWord', keyword);
		}
	}
});
// end of search functions


// helper function to retreive information for comments
 Template.comments_list.helpers({
  comments: function(){
  	// add a search criteria inside find
    return Comments.find({});
  }

 });




/*** EVENTS ***/

Template.addNewItem.events({
	"click .js-open-form": function(e) {
		$('.newitem-form').toggle();
		$('button.btn.btn-primary.js-open-form').toggleClass('open-button');
	},

	'submit .js-save-item-form': function (event){
		event.preventDefault();		
		// // here is an example of how to get the url out of the form:
		var itemName = event.target.itemName.value;
	    var imgURL = event.target.url.value;
	    var description = event.target.description.value;
	       
	     console.log(itemName);
	     console.log(imgURL); 
	     console.log(description); 
	   
	   Meteor.call('item.insert', itemName, imgURL, description);
	    
	    // clear form
	    // target.itemName.value = '';
	    // target.description.value = '';
	    // target.url.value = '';

	    document.getElementById("addItemForm").reset();
		$('#success-modal').modal('show');
		$('.js-open-form').click();


	}
});


Template.comment_form.events({
	"click .js-toggle-comment-form": function(event) {
		$('#comment-form').toggle('slow');
	},

	"submit .js-save-comment-form": function(event) {
		Comments.insert({ 
                comment: comment, 
                createdOn: new Date(),
                createdBy: Meteor.user().username
            });

        return false; // stop the form submit from reloading the page
	}
})