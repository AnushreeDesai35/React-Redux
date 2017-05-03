import React from 'react';

class List extends React.Component {
	constructor(props){
		super(props);
		}

	render() {
			return (
        <div>
        <li>{this.props.list.note}</li>
        </div>
				);
	}
}

export default List;
