// test-jsx/TodoListReactComponent.jsx

const React = require("react");
const ReactTestUtils = require("react-addons-test-utils");
const assert = require("assert");

const TodoListReactComponent = require("../src/TodoListReactComponent.jsx");

let renderedComponent;

define("tests for our TodoList component", function() {
    beforeEach(function() {
        $ = {
            ajax: function() {
                return {
                    done: function(cb) {
                        cb({
                            main: {
                                temp: 0
                            }
                        })
                    }
                }
            }
        }

        renderedComponent = ReactTestUtils.renderIntoDocument(
            <TodoListReactComponent></TodoListReactComponent>
        );
    })
    it("renders an h1 with \"Your todos:\"", function() {
        assert.equal(ReactTestUtils.findRenderedDOMComponentWithTag(renderedComponent, "h1").innerHTML, "Your todos:");
    })
    it("adds a new todolist item", function() {
        // using refs to get/set underlying HTML elements. Not a fan - probably possible to work around it
        let newTodoField = renderedComponent.refs.newTodoField;
        newTodoField.value = "This is a new todolist item!"
        ReactTestUtils.Simulate.change(newTodoField);
        let newTodoForm = renderedComponent.refs.newTodoForm
        ReactTestUtils.Simulate.submit(newTodoForm);
        let todoListItems = ReactTestUtils.scryRenderedDOMComponentsWithTag(renderedComponent, "li");
        assert.equal(todoListItems.length, 2);
        assert.equal(todoListItems[1].innerHTML, "<span>This is a new todolist item!</span><button>remove todo</button>");
    })
    it("adds a \"Bring a jacket!\" todo after making a call to jQuery", function() {
        let todoListItems = ReactTestUtils.scryRenderedDOMComponentsWithTag(renderedComponent, "li");
        assert.equal(todoListItems.length, 1);
        assert.equal(todoListItems[0].innerHTML, "<span>Bring a jacket!</span><button>remove todo</button>");
    })
})
