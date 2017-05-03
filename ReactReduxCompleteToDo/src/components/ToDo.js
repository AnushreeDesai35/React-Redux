import React from 'react';
import Sticky from './Sticky';
import { connect } from 'react-redux';

class ToDo extends React.Component {
	constructor(props){
		super(props);
		console.log(this.props.dispatch,this.props.todos);
	}

	addToDo = ()=>{
		let todo={
			content:this.refs.todocontent.value,
			title:this.refs.todotitle.value,
			id:parseInt(Math.random() * 1000),
			complete:false
		};
		this.props.dispatch({type:"ADD_TODO",todo}); //ideally should write todo:todo, but es6 allows direct todo if both the names are same.
		this.refs.todocontent.value = "";
		this.refs.todotitle.value = "";
	}

	deleteToDo = (id)=>{
		this.props.dispatch({type:"DELETE_TODO",id});
		//this.setState({todos:newArr});  // bug:: when deleting newly added todo, multiple todos get deleted because id was not passed and it gets undefined.. it will delete all those with undefined.
	}

	setComplete = (id)=>{
		this.props.dispatch({type:"COMPLETE_TODO",id});
	}

		render = () => {
			return (
			<div>
			<div ref="inputDialog">
				<input type="text" ref="todotitle"/>
			</div>
			<div>
				<button onClick={this.addToDo}>Add ToDo</button>
				<br/><br/>
				{this.props.todos.map((todo,key) => {
					return(
							<Sticky key={key} todo={todo}/>
						);
	})}
			</div>
			</div>
		);
	}
}

function mapStateToProps(state) { //you can provide any other name too.
	console.log(state);
	return state;
}

//(state) => {state}; can also be written as state => state

ToDo = connect(mapStateToProps)(ToDo);

export default ToDo;
