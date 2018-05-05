import React, { Component } from 'react';

class MyList extends Component {

	// onClick={fun}
	// onClick={fun(x)}
	// onClick={() => fun(x)}

	render() {
		const displayList = this.props.list.map(
			(x, index) => (
				<li key={x}>
					<button onClick={() => this.props.handleChangeCity(x)}> {x} </button>
				</li>
			)
		);
    console.log("displayList", displayList)
		return (
			<ul>
				{displayList}
			</ul>
		);
	}
}

export default MyList;
