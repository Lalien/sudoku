import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Board extends React.Component {
	constructor(props) {
		super(props);
		var grid = [];
		var gridNumList = Array(81).fill().map((_,i) => i);
		var gridArray = Array(81).fill().map((_,i) => new Tile(grid,gridNumList) );
	}
	
	generateTiles() {
		return true;
	}

	render() {
		return(
		<div>Testing</div>
		);
	}
}

class Tile extends React.Component {
	constructor(grid,gridNumList) {
		super();;
		this.number = removeIndex(gridNumList, Math.floor(Math.random() * Math.floor(gridNumList.length)));
		grid.push(this.number);
	}
}

function removeIndex(array, index) {
	var array1 = array.splice(0,index);
	array.shift();
	array = array.concat(array1).filter((_,i) =>  i != 'undefined');
}

ReactDOM.render(
	<Board/>,
	document.getElementById('root')
);