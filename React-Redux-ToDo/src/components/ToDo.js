import React from 'react';
import Sticky from './Sticky';
import store from '../reducers/store';
// import { connect } from 'react-redux';

class ToDo extends React.Component {
	constructor(props){
		super();
		console.log(props.dispatch,props.state);
		this.dispatch = dispatch;
		this.state={
			todos:[
			{
				content:"content1",
				title:"content1",
				id:"1",
				complete:false
			},
			{
				content:"content2",
				title:"content2",
				id:"2",
				complete:false
			},
			{
				content:"content3",
				title:"content3",
				id:"3",
				complete:false
			}
			]

		}

		store.subscribe(this.updateState);
		// this.addToDo = this.addToDo.bind(this);
		// this.mapmyvalue = this.mapmyvalue.bind(this)
	}

	updateState = () => {
		let stateOfStore = store.getState();
		this.setState(stateOfStore);
	}

	addToDo = ()=>{
		let todo={
			content:this.refs.todocontent.value,
			title:this.refs.todotitle.value,
			id:parseInt(Math.random() * 1000),
			complete:false
		};
		store.dispatch({type:"ADD_TODO",todo}); //ideally should write todo:todo, but es6 allows direct todo if both the names are same.
	}

	deleteToDo = (id)=>{
		//alert('inside delete');
		let newArr = this.state.todos.filter(function(todo){
			return(todo.id != id);
		});

		this.setState({todos:newArr});  // bug:: when deleting newly added todo, multiple todos get deleted because id was not passed and it gets undefined.. it will delete all those with undefined.
	}

	setComplete = (id)=>{
		// below code will give one obj whose complete is true, now will have to join complete todo and incomplete todo...yuk bad code! thus MAP!
		// alert('hi');
		// let todo = this.state.todos.filter(function(todo){
		// 	return(todo.id == id);
		// })[0]; //will returb array matching single id which will contain single item thus [0]

		// todo.complete = true;

		let updatedTodos = this.state.todos.map(function(todo,key){
			if(todo.id == id){
				todo.complete = true;
			}
				return (todo);
		});

		this.setState({todos:updatedTodos});

	}

	// mapmyvalue = () => {
	// 	// function(todo,key){
	// 				return(
	// 						<Sticky key={key} todo={todo} deleteToDo={this.deleteToDo}/>
	// 					);
	// 			// }
	// }

	render = () => {
		// let style = {
		// 	display: "none"
		// }
		//use this for applying : style={style}
		//let stateOfStore = store.getState();
		console.log(store.getState())

		return (
			<div>
			<div ref="inputDialog">
				<input type="text" ref="todocontent"/>
				<input type="text" ref="todotitle"/>
			</div>
			<div>
				<button onClick={this.addToDo}>Add ToDo</button>
				{this.state.todos.map((todo,key) => {
		// function(todo,key){
					return(
							<Sticky key={key} todo={todo} deleteToDo={this.deleteToDo} setComplete={this.setComplete}/>  //three times Sticky render will be called for each sticky. 
						);
				// }
	})}
			</div>
			</div>
		);
	}
}

// ToDo = connect()(ToDo);

export default ToDo;
