Posts = new Mongo.Collection("posts");

Meteor.methods({
  get_post: function (id2) {
    return Posts.find({ id : id2}).fetch();
  },
  add: function (post) {
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authenticated');
    }
    post.type = 'cpc';
    post.id = post._id;
    post.message = "<p>" + post.message + "</p>";
    post.owner = Meteor.userId();
    post.username = Meteor.user().username;
    post.createdAt = new Date();
    post.likes = 0;
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
  },
  like: function (post) {
    var post = Posts.findOne(post._id);
    // if (post.owner !== Meteor.userId()) {
    //   throw new Meteor.Error('not-authorized');
    // }
    Posts.update(post._id, {$set: {likes: post.likes+1} });
  }
});
