import Ember from 'ember';
var NavBarBrandComponent = Ember.Component.extend({
  color:'#FFF',
  title: 'Brand',
  tagName:'span',
  attributeBindings:['style'],
  style: function(){
    return 'color:'+this.get('color')+';';
  }.property('color')
});

export default NavBarBrandComponent;
