App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['Zombies!', 'TempleQuest', 'Death Quest', 'Adventure time!'];
  }
});
