import Ember from 'ember';
var NavBarBrandComponent = Ember.Component.extend({
  color:'#FFF',
  title: 'Brand',
  tagName:'a',
  classNames:['navbar-brand'],
  attributeBindings:['style'],
  style: function(){
    return 'color:'+this.get('color')+';';
  }.property('color')
});

export default NavBarBrandComponent;
