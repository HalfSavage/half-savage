import Ember from 'ember';
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';
var App;
module('An Integration test', {
    setup: function() {
        App = startApp();
    },
    teardown: function() {
        Ember.run(App, App.destroy);
    },
});
test("Index page contents", function() {
    expect(2);
    visit('/').then(function() {
        equal(find('.navbar').length, 1, "Page contains navigation");
        equal(find('.main').length, 1, "Page contains main container");
    });
});
