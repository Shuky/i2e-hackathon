Comments = new Mongo.Collection("comments");

Meteor.methods({
  addComment: function (comment) {
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authenticated');
    }
    comment.owner = Meteor.userId();
    comment.username = Meteor.user().username;
    comment.createdAt = new Date();
    //comment.startPosition
    //comment.endPosition
    Comments.insert(comment);
  },
  removeComment: function (comment) {
    if (comment.owner !== Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Comments.remove(comment._id);
  },
  updateComment: function (commentPost) {
    var comment = Comments.findOne(commentPost._id);
    if (comment.owner !== Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Comments.update(comment._id, {$set: {message: commentPost.message, public: commentPost.public} });
  }
});
