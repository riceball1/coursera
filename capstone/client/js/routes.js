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


// About page

Router.route('about', function() {
	this.layout('ApplicationLayout');
	console.log("About page!");
	this.render("navbar", { to: "nav" });
    this.render("about", { to: "main" });
    this.render("foot", { to: "footer" });
});

// Profile page

Router.route('profile', function() {
	this.layout('ApplicationLayout');
	console.log("Profile page!");
	this.render("navbar", { to: "nav" });
    this.render("profile", { to: "main" });
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


