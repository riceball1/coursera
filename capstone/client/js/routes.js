// set up the main template the the router will use to build pages
Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

// specify the top level route, the page users see when they arrive at the site
Router.route('/', function() {
	// use the template named ApplicationLayout
	this.layout('ApplicationLayout');

    console.log("Setting Up!");
    this.render("navbar", { to: "nav" });
    this.render("home", { to: "main" });
    this.render("foot", { to: "footer" });
});



//Results page 