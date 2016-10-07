/**** SEARCH ****/
var options = {
    keepHistory: 1000 * 60 * 5,
    localSearch: true
};
var fields = ['packageName', 'description'];

PackageSearch = new SearchSource('packages', fields, options);

// HELPERS
Template.searchResult.helpers({
    getPackages: function() {
        return PackageSearch.getData({
            transform: function(matchText, regExp) {
                return matchText.replace(regExp, "<b>$&</b>")
            },
            sort: { isoScore: -1 }
        });
    },

    isLoading: function() {
        return PackageSearch.getStatus().loading;
    }
});

// EVENTS

Template.searchBox.events({
    "keyup #search-box": _.throttle(function(e) {
        var text = $(e.target).val().trim();
        PackageSearch.search(text);
    }, 200)
});


/*** OTHER FUNCTIONS ***/ //

Template.home.events({
    "click .js-info-popout": function(e) {
        console.log("You just clicked for more info");
        $('.description').slideToggle('slow', function() {
            $('.description').css('transition', 'background-color 5s');
            $('.description').css('background-color', 'lightgray');
        });
    }
})
