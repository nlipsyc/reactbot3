
jest.dontMock('../ClickCounter.js');
describe('ClickCounter', function() {
  it('increments the counter on click', function () {
    var React = require('react/addons');
    var ClickCounter = require('../ClickCounter.js');
    var TestUtils = React.addons.TestUtils;


    //Render the counter
    var button = TestUtils.renderIntoDocument(
      <ClickCounter />
    );

    //Make sure it starts at 0
    var counterVal = TestUtils.findRenderedDOMComponentWithClass(
      button, 'counterButton');
    expect(counterVal.getDOMNode().i).toEqual(0);


    //Verify it increments properly
    var counterVal = TestUtils.findRenderedDOMComponentWithClass(
      button, 'counterButton');
    TestUtils.Simulate.change(onClick);
    expect(counterVal.getDOMNode().i).toEqual(12);
  });
});
