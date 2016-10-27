// publish collection
Meteor.publish('items', function itemsPublication() {
    return Items.find({});
});


/* write up the publication to give the comment data, found off
the postId as the joining key between post/comments */

Meteor.publish('postComments', function(postId) {
	post = Post.findOne({slug: slug});
	return Comments.find({postId: postId});
});





// //Example for Search of Albums.js

// Meteor.publish( 'albums', function( search ) {
//   check( search, Match.OneOf( String, null, undefined ) );

//   let query      = {},
//       projection = { limit: 10, sort: { title: 1 } };

//   if ( search ) {
//     let regex = new RegExp( search, 'i' );

//     query = {
//       $or: [
//         { title: regex },
//         { artist: regex },
//         { year: regex }
//       ]
//     };

//     projection.limit = 100;
//   }

//   return Albums.find( query, projection );
// });