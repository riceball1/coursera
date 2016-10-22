// publish collection
Meteor.publish('items', function itemsPublication() {
    return Items.find({});
});
