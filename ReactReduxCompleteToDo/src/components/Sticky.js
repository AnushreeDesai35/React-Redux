import React from 'react';
import List from './List'

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
console.log(this.props.todo.lists);
if(this.props.todo.complete == true){
this.refs.stickyContent.style.textDecoration = "line-through";
}
			return (
				<div className="sticky">
					<div className="stickyTitle">{this.props.todo.title}</div>
					<div className="stickyContent">
						<ul>
							{this.props.todo.lists.map((list,key) => {
								return(
										<List key={key} list={list}/>
									);
							})}
						</ul>
					</div>
			</div>
		);
	}
}

export default Sticky;
