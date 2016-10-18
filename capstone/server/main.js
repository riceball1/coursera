import { Meteor } from 'meteor/meteor';



Meteor.startup(() => {

    if (!Items.findOne()) {
        console.log("No data yet. Creating starter data.");
        Items.insert({
            itemName: "baking soda",
            description: "Description goes here.",
            createdOn: new Date(),
            createdBy: "Unknown",
            up: 0,
            down: 0
        }, {
            itemName: "vinegar",
            description: "Description goes here.",
            createdOn: new Date(),
            createdBy: "Unknown",
            up: 0,
            down: 0
        }, {
            itemName: "salt",
            description: "Description goes here.",
            createdOn: new Date(),
            createdBy: "Unknown",
            up: 0,
            down: 0
        }, );
    }
});


// Messsages._ensureIndex({
//     "title": "text",
//     "value": "text"
// });


