Meteor.startup(function () {
  Comments.remove({}); 
  if (Comments.find().count() === 0) {
    var cmnts = [
      {
        'title' :'I think you are wrong!',
        'comment': "because of the ... and the ... and you said ... while he said ... !!!!!11",
        'createdAt' : new Date(),
        postid: '1',
        commentid: 0,

      },
      {
        'title' :'I think you are wrong!',
        'comment': "because of the ... and the ... and you said ... while he said ... !!!!!11", 
        'createdAt' : new Date(),
        postid: '1',
        commentid: 0,
      },
      {
        'title' :'I think you are wrong!',
        'comment': "because of the ... and the ... and you said ... while he said ... !!!!!11", 
        'createdAt' : new Date(),
        postid: '1',
        commentid: 0,
      },
    ];
    for (var i = 0; i < cmnts.length; i++)
      Comments.insert(cmnts[i]);
  }
});
