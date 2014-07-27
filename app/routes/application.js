import Ember from 'ember';
var ApplicationRoute = Ember.Route.extend({
  renderTemplate: function(controller, model){
    this._super(controller,model);
    this.render();
    this.render('header', {into:'application', outlet:'header', controller:this.controllerFor('header')});
  }
});

export default ApplicationRoute;
