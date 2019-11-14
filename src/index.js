import React from 'react';
import ReactDOM from 'react-dom';


const El = () => {
	return (
		<div>
			<h1>Hello world!</h1>
			<input type="text"/>
			<ul>
				<li>Drink Coffee</li>
				<li>Drink some tea</li>
			</ul>
		</div>
	)
};

ReactDOM.render(<El/>, document.getElementById('root'));