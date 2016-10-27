// set up the main template the the router will use to build pages
Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

// specify the top level route, the page users see when they arrive at the site
Router.route('/', function() {
	// use the template named ApplicationLayout
	this.layout('ApplicationLayout');

    console.log("Landing Page!");
    this.render("navbar", { to: "nav" });
    this.render("home", { to: "main" });
    this.render("foot", { to: "footer" });
});



//Individual Item Page

Router.route('/item/:_id', {
	template: "itemPage",
	data: function(){
		var currentList = this.params._id;
		return Items.findOne({_id: currentList});
	}
	
});

//post comments
Router.map(function() {
	this.route('post/:id', {
		waitOn: function() {
			return [
				Meteor.subscribe('post', this.params.id),
				Meteor.subscribe('postComments', this.params.id)
			]
		},

		data: function() {
			return {
				post: Posts.findOne({_id: this.params.id}),
				comments: Comments.find({postId: this.params.id})
			}
		}
	});
});



//Search page

Router.route('search', function() {
	this.layout('ApplicationLayout');
	this.render("search", {to: "main"});
})
