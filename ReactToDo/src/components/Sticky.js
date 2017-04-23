import React from 'react';

class Sticky extends React.Component {
	constructor(props){
		super(props);
		}
		// this.addSticky = this.addSticky.bind(this);

	removeToDo = ()=>{
		this.props.deleteToDo(this.props.todo.id);
	}
	setComplete = ()=>{
		this.props.setComplete(this.props.todo.id);
	}

	render() {

if(this.props.todo.complete == true){
this.refs.stickyContent.style.textDecoration = "line-through";
}
			return (
		<div>
			<h2 onClick={this.setComplete}>{this.props.todo.title}</h2>
			<div ref="stickyContent">{this.props.todo.content}</div>
			<button onClick={this.removeToDo}>Delete</button>
		</div>
		);
	}
}

export default Sticky;
