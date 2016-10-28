// Check if running on server
// Add data into the database if it's not already there



// Starter data
Meteor.startup(() => {
    // Create data if there is none
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

    // Create users if there is none
    if (!Meteor.users.findOne()){
    // array for customized users for startup
    var avatar_arr = ["guy", "girl"];
    for (var i=0;i<avatar_arr.length;i++){
      var email = avatar_arr[i]+"@test.com";
      var username = avatar_arr[i];
      // modify the avatar to iterate over four images
      var avatar = avatar_arr[i] +".png"
      console.log("creating a user with password 'test123' and username/ email: "+email);
      Meteor.users.insert({profile:{username:username, avatar:avatar}, emails:[{address:email}],services:{ password:{"bcrypt" : "$2a$10$I3erQ084OiyILTv8ybtQ4ON6wusgPbMZ6.P33zzSDei.BbDL.Q4EO"}}});
    }
  } 
});