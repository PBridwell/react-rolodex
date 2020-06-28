import React from 'react';
import './App.css';
import api from './utils/api';

// main app class
class App extends React.Component {
	// states
	state = {
		employees: [],
		search: '',
		sortID: false,
		sortName: false,
		sortEmail: false,
		sortPhone: false,
	};

	//   calls axios search function
	searchEmployees = () => {
		api
			.search()
			.then((res) => this.setState({ employees: res.data }))
			.then((res) => console.log(this.state.employees))
			.catch((err) => console.log(err));
	};
	// Perform search for all employees on page load
	componentDidMount() {
		this.searchEmployees();
	}

	render() {
		return <div className='text-center'></div>;
	}
}

export default App;
