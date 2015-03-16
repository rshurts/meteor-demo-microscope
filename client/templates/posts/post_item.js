Template.postItem.helpers({
  ownPost: function() {
    var owned = this.userId === Meteor.userId();
    console.log(owned);
    return owned;
  },
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});