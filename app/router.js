import Ember from 'ember';

var Router = Ember.Router.extend({
  location: HalfSavageENV.locationType
});

Router.map(function() {
  this.route('index', {path:'/'});
  this.route('forums');
  this.route('events');
});

export default Router;
