// publish collection
Meteor.publish('items', function() {
    return Items.find();
});
