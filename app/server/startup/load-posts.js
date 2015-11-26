Meteor.startup(function () {
  //Posts.remove({});
  if (Posts.find().count() === 0) {
    var posts = [
      {
        'message': 'Case 36-2015: A 27-Year-Old Woman with a Lesion of the Ear Canal',
        public: true,
        owner: '1'
      },
      {
        'message': 'Case 36-2015: A 16-Year-Old Boy with Coughing Spells',
        public: true,
        owner: '1'
      },
      {
        'message': 'Case 13-2010: An 18.5-Month-Old Girl with Watery Diarrhea and Poor Weight Gain',
        public: true,
        owner: '1'
      }
    ];
    for (var i = 0; i < posts.length; i++)
      Posts.insert({message: posts[i].message, public: posts[i].public, owner: posts[i].owner});
  }
});
