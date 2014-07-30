import Ember from 'ember';
var NavBarComponent = Ember.Component.extend({
  tagName: 'nav',
  classNames: ['navbar', 'navbar-default','banner'],
  attributeBindings:['role','style'],
  role:'navigation',
  background: null,
  style:function(){
    var bg = this.get('background');
    return Ember.isEmpty(bg) ? '' : 'background:url("'+bg+'") no-repeat center center fixed; background-size:cover;';
  }.property('background')
});

export default NavBarComponent;
