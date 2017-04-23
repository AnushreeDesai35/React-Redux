export default function todoReducer(state ={}, action) {
	switch(action.type){
		case "ADD_TODO":
			let newtodos = state.todos.concat(action.todo); //not writing break because direct returning the object :D
			return {todos: newtodos};
		default:
			return state;
	}
}