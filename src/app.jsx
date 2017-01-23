// src/app.jsx

var React = require("react")
var ReactDOM = require("react-dom");

var TodoListReactComponent = require("./TodoListReactComponent.jsx")

ReactDOM.render((
	<TodoListReactComponent></TodoListReactComponent>
), document.getElementById('app'));
