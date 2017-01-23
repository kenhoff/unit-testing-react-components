const React = require("react");
const ReactTestUtils = require("react-addons-test-utils");
const assert = require("assert");

const TodoListReactComponent = require("../src/TodoListReactComponent.jsx");

var renderedComponent = ReactTestUtils.renderIntoDocument(
	<TodoListReactComponent></TodoListReactComponent>
);

it("renders an h1 with \"Your todos:\"", function() {
	assert.equal(ReactTestUtils.findRenderedDOMComponentWithTag(renderedComponent, "h1").innerHTML, "Your todos:");
})
