import Ember from 'ember';
var HeaderController = Ember.ObjectController.extend({
  brandName: 'Half Savage',
  background:'assets/img/banner-bg.jpg',
  color: '#FFF',
  navItems: ['forums','events']
});

export default HeaderController;
