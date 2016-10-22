// Check if running on server
// Add data into the database if it's not already there



// Starter data
Meteor.startup(() => {
    if (!Items.findOne()) {
        console.log("No data yet. Creating starter data.");
       
        // // JSON parse all files 
        var items1 = JSON.parse(Assets.getText('json/household_items.json'));
        // var item2 = JSON.parse(Assets.getText('json/#.json'));
        // var item3 = JSON.parse(Assets.getText('json/#.json'));
        // // Items grouped together to be interated over and put into database
        var itemsGroup = [items1];

        // forEach can only be used with an array of objects
        var counter = 0;
        _.each(itemsGroup, function(itemsGroup){
            itemsGroup.forEach(function(item){
                Items.insert(item);
                counter++;
            });
        });
        console.log("The total data inserted " + counter);
        }

        if(Items.findOne()) {
            console.log("Server started up and data already loaded!");
        }
});