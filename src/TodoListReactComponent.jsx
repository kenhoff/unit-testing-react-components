// src/TodoListReactComponent.jsx

var React = require("react");

var TodoListReactComponent = React.createClass({
	getInitialState: function() {
		return {todos: [], todoInput: ""};
	},
	render: function () {
		return (
			<div>
				<h1>Your todos:</h1>
				<ul>
					{this.state.todos.map((todo) => {
						return (
							<li key={Math.random()}>
								<span>{todo}</span>
								<button onClick={(e) => {
									var newTodos = this.state.todos.slice();
									newTodos.splice(newTodos.indexOf(todo), 1);
									this.setState({todos: newTodos});
								}}>remove todo</button>
							</li>
						)
					})}
				</ul>
				<form onSubmit={(e) => {
					e.preventDefault();
					var newTodos = this.state.todos.slice();
					newTodos.push(this.state.todoInput);
					this.setState({todos: newTodos, todoInput: ""});
				}}>
					<input onChange={(e) => {
						this.setState({todoInput: e.target.value});
					}} value={this.state.todoInput}></input>
					<input type="submit" value="Add Todo"></input>
				</form>
			</div>
		);
		// a couple notes -
		// when the input text box is changed, change the state to reflect the new change. you _can_ use uncontrolled inputs, but in almost every situation, I've been much happier using controlled inputs. (check out https://facebook.github.io/react/docs/forms.html and https://facebook.github.io/react/docs/uncontrolled-components.html for more info.)
		// have to create a new array for the todos, push the new one on, then set the state with the new todos. have to treat existing state as immutable!
		// using a form instead of just inputs and buttons. builtin support for hitting enter, and works better with mobile web keyboards! however, we have to use e.preventDefault() to prevent the browser from navigating to a new page.
		// ES2015 gives us all sorts of fun things, like class definitions and arrow functions, but I'm trying to limit their use here. generally, I'll use an arrow function wherever I want to avoid using `.bind(this)` on a function.
	}
});

module.exports = TodoListReactComponent;
