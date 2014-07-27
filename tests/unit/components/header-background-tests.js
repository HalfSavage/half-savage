import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('header-background', 'Unit - Header background component',{
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component.state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component.state, 'inDOM');
});
