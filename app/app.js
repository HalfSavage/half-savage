import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'half-savage', // TODO: loaded via config
  podModulePrefix: 'half-savage/pods',
  Resolver: Resolver
});

loadInitializers(App, 'half-savage');

export default App;
