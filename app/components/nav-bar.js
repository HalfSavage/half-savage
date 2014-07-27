import Ember from 'ember';
var NavBarComponent = Ember.Component.extend({
  tagName: 'nav',
  classNames: ['navbar', 'navbar-default'],
  attributeBindings:['role'],
  role:'navigation'
});

export default NavBarComponent;
