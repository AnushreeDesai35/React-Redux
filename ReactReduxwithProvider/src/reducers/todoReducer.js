export default function todoReducer(state ={}, action) {
	switch(action.type){
		case "ADD_TODO":
			let newtodos = state.todos.concat(action.todo); //not writing break because direct returning the object :D
			return {todos: newtodos};
		case "DELETE_TODO":
			let newArr = state.todos.filter(function(todo){
			return(todo.id != action.id);
			});
			return {todos: newArr};
		case "COMPLETE_TODO":
		let updatedTodos = state.todos.map(function(todo,key){
			if(todo.id == action.id){
				todo.complete = true;
			}
				return (todo);
		});
		return {todos: updatedTodos};
		default:
			return state;
	}
}
