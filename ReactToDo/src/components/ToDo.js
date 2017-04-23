import React from 'react';
import Sticky from './Sticky';

class ToDo extends React.Component {
	constructor(props){
		super(props);
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
		// this.addToDo = this.addToDo.bind(this);
		// this.mapmyvalue = this.mapmyvalue.bind(this)
	}

	addToDo = ()=>{
		// alert('hi');
		this.refs.inputDialog.style.display = "block";
		this.state.todos.push({content:this.refs.todocontent.value,title:this.refs.todotitle.value,complete:false,id:parseInt(Math.random() * 1000)});
		this.setState({todos:this.state.todos});
		this.refs.todocontent.value = "";
		this.refs.todotitle.value = "";
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

	render() {
		// let style = {
		// 	display: "none"
		// }
		//use this for applying : style={style}

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

export default ToDo;
