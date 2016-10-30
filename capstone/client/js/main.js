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
    return Comments.find({website: Router.current().params._id});
  }

 });

Template.comment_form.events({
  "click .js-toggle-comment-form":function(event){
      $("#comment-form").toggle('slow');
    },
  'submit .js-save-comment-form': function(event){
    
    var comment = event.target.comment.value;
    console.log("The comment you entered is: " +comment);

        Comments.insert({
                website: Router.current().params._id, 
                comment: comment, 
                createdOn: new Date(),
                createdBy: Meteor.user().username
            });
        

        return false; // stop the form submit from reloading the page
  }

});



/*** EVENTS ***/

Template.addNewItem.events({
	"click .js-open-form": function(e) {
		$('.newitem-form').toggle();
		$('button.btn.btn-primary.js-open-form').toggleClass('open-button');
	},

	'submit .js-save-item-form': function (event){
		// here is an example of how to get the url out of the form:
		var itemName = event.target.itemName.value;
		var description = event.target.description.value;
	    var imgURL = event.target.url.value;
	       
	   // insert items into the database
	  	Items.insert({
	      itemName: itemName, 
	      description: description, 
	      image: imgURL, 
	      createdOn: new Date(),
	      createdBy: Meteor.user().username
	    });
	    
	    console.log("You added to the database: ", item-name , description, imgURL);
	    // clear form
	    target.itemName.value = '';
	    target.description.value = '';
	    target.url.value = '';

		 return false;// stop the form submit from reloading the page

	}
});

////////***** NEED TO FIX SUBMIT FORM ****///////
	// 'submit .js-submit-form': function (event){
	// 	// here is an example of how to get the url out of the form:
	// 	var url = event.target.url.value;
	// 	var description = event.target.description.value;
	//     var title = event.target.title.value;
	       
	//    // insert items into the database
      
 //      Items.insert({
 //          title: title, 
 //          url: url, 
 //          description: description, 
 //          createdOn: new Date(),
 //          createdBy: Meteor.user().username
 //        });
        
 //        // clear form
 //        target.url.value = '';
 //        target.description.value = '';
 //        target.title.value = '';

	// 		 return false;// stop the form submit from reloading the page

	// 	}
// });

// Template.home.events({
// 	'submit .searchItem': function (event) {
// 		// Prevent default browser form submit
// 		event.preventDefault();

// 		// Get value from form element
// 		const target = event.target;
// 		const text = (target.text.value).toLowerCase();

// 		/* not best practice
// 		** should avoid DOM manipulation
// 		** should use Session instead
// 		*/

// 		if (Items.find({itemName: text}).fetch().length > 0 ) {
// 			var itemID = Items.find({itemName: text}).fetch()[0]._id;
// 			var itemName = Items.find({itemName: text}).fetch()[0].itemName;
// 			$('.results-box').css('display', 'block');
// 			$('.results-box').html('<h1><a href="/item/' + itemID + '">' + itemName + '</a></h1>' );
// 			console.log(Items.find({itemName: text}).fetch());
// 			console.log("This is what you typed: " + text);
// 			return Items.find({itemName: text});
// 		} else {
// 			$('.results-box').css('display', 'block');
// 			$('.results-box').html("<h1>Nothing was found.</h1>");
// 			console.log("Nothing was found");
// 		}
 
// 		//Clear form
// 		target.text.value = '';
// 	},
 
// 	});