// Check if running on server
// Add data into the database if it's not already there



// Starter data
Meteor.startup(() => {

    if (Items.find().count() == 0) {
        console.log("No data yet. Creating starter data.");
        Items.insert({
            itemName: "baking soda",
            description: "Description goes here.",
            createdOn: new Date(),
            createdBy: "Server",
            up: 0,
            down: 0
        	});
        Items.insert({
            itemName: "vinegar",
            description: "Description goes here.",
            createdOn: new Date(),
            createdBy: "Server",
            up: 0,
            down: 0
        	});
        Items.insert({
            itemName: "salt",
            description: "Saline water (also called salt water, salt-water or saltwater) is water with salt in it. It often means the water from the seas (sea water) and oceans. Salt water used for making or preserving food, is usually saltier than sea water and is called brine. Drinking sea water alone is dangerous. A summary of 163 life raft voyages showed the risk of death at 39% for those who drank seawater, compared to 3% for those who did not. Experiments on rats showed the danger.",
            createdOn: new Date(),
            createdBy: "Server",
            up: 0,
            down: 0
        	});
    } // end of if have items
});