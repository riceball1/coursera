Items = new Mongo.Collection('items');
Comments = new Mongo.Collection("comments");

Items.allow({
	insert: () => false,
	update: () => false,
	remove: () => false
});

Items.deny({
	insert: () => true,
	update: () => true,
	remove: () => true
});

Comments.allow({
	insert: () => false,
	update: () => false,
	remove: () => false
});

Comments.deny({
	insert: () => true,
	update: () => true,
	remove: () => true
});


// example of a schema
// let ItemsSchema = new SimpleSchema({})

//Items.attachSchema( ItemsSchema );

