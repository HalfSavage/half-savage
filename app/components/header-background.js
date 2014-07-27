import Ember from 'ember';
var HeaderBackgroundComponent = Ember.Component.extend({
  background: null,
  attributeBindings: ['style'],
  classNames: ['banner'],
  style:function(){
    var bg = this.get('background');
    return Ember.isEmpty(bg) ? '' : 'background:url("'+bg+'") no-repeat center center fixed; background-size:cover;';
  }.property('background')
});

export default HeaderBackgroundComponent;
