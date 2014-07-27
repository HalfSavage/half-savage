import { test, moduleFor } from 'ember-qunit';

moduleFor('controller:header', 'Unit - Header Controller');

test("it exists", function(){
  ok(this.subject());
});

test("brandName: get", function(){
  var header = this.subject();
  equal(header.get('brandName'), 'Half Savage');
  header.set('brandName', 'test');
  equal(header.get('brandName'), 'test');
});

test("color: set", function(){
  var header = this.subject();
  equal(header.get('color'), '#FFF');
});
