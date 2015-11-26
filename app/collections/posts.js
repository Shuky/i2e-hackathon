Posts = new Mongo.Collection("posts");

Meteor.methods({
  add: function (post) {
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authenticated');
    }
    post.type = 'cpc';
    post.owner = Meteor.userId();
    post.username = Meteor.user().username;
    post.createdAt = new Date();
    Posts.insert(post);
  },
  remove: function (post) {
    if (post.owner !== Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Posts.remove(post._id);
  },
  update: function (updatedPost) {
    var post = Posts.findOne(updatedPost._id);
    if (post.owner !== Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Posts.update(post._id, {$set: {message: updatedPost.message, public: updatedPost.public} });
  }
});
