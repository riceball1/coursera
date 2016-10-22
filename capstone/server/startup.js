// Check if running on server
// Add data into the database if it's not already there



// Starter data
Meteor.startup(() => {
    if (!Items.findOne()) {
        console.log("No data yet. Creating starter data.");
       
        // // JSON parse all files 
        // var item1 = JSON.parse(Assets.getText('json/#.json'));
        // var item2 = JSON.parse(Assets.getText('json/#.json'));
        // var item3 = JSON.parse(Assets.getText('json/#.json'));
        // // Items grouped together to be interated over and put into database
        // var items_group = [item1, item2, item3];

        // // inserts each object as individual datasets
        // var counter = 0;
        // _.each(items_group, function(items_group){
        //     items_group.forEach(function(item){
        //         Facts.insert(item);
        //         counter++;
        //     });
        // });
        // console.log("The total data inserted " + counter);
        // }

        if(Items.findOne()) {
            console.log("Server started up and data already loaded!");
        }

    } // end of if have items
});