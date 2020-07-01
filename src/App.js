import React, { useEffect, useState } from 'react';
import './App.css';
import api from './utils/api';

import EmployeeTable from './components/EmployeeTable/index';
import SearchBar from './components/SearchBar';
import Directory from './components/Directory';

// main app class
// class App extends React.Component {
// 	// states
// 	state = {
// 		employees: [],
// 		search: '',
// 		sortID: false,
// 		sortName: false,
// 		sortEmail: false,
// 		sortPhone: false,
// 	};

const App = () => {
	const [employees, setEmployees] = useState([]);
	const [search, setSearch] = useState('');
	const [sortID, setSortID] = useState(false);
	const [sortName, setSortName] = useState(false);
	const [sortEmail, setSortEmail] = useState(false);
	const [sortPhone, setSortPhone] = useState(false);

	//   calls axios search function
	const searchEmployees = () => {
		api
			.search()
			.then((res) => setEmployees(res.data))
			.then((res) => console.log(employees))
			.catch((err) => console.log(err));
	};

	// Perform search for all employees on page load
	// componentDidMount() {
	// 	this.searchEmployees();
	// }
	useEffect(() => {
		searchEmployees();
	}, []);
	// //  sort by id function, reversing then resorting on alternating clicks
	const handleSortID = () => {
		const idSort = employees;
		if (!sortID) {
			idSort.sort((a, b) => (a.id > b.id ? 1 : -1));
			// seState({
			// 	employees: idSort,
			// 	sortID: true,
			// });
			setEmployees(idSort);
			setSortID(true);
			// Functionality for alternate click
		} else {
			idSort.reverse((a, b) => (a.id < b.id ? -1 : 1));
			// this.setState({
			// 	employees: idSort,
			// 	sortID: false,
			// });
			setEmployees(idSort);
			setSortID(false);
		}
	};

	// //  sort by name function, reversing then resorting on alternating clicks
	// handleSortName = () => {
	// 	const nameSort = this.state.employees;
	// 	if (!this.state.sortName) {
	// 		// 1 and -1 values for ascending and descending
	// 		nameSort.sort((a, b) => (a.name > b.name ? 1 : -1));
	// 		this.setState({
	// 			employees: nameSort,
	// 			sortName: true,
	// 		});
	// 	} else {
	// 		nameSort.reverse((a, b) => (a.name < b.name ? -1 : 1));
	// 		this.setState({
	// 			employees: nameSort,
	// 			sortName: false,
	// 		});
	// 	}
	// };

	// //  sort by email function, reversing then resorting on alternating clicks
	// handleSortEmail = () => {
	// 	const emailSort = this.state.employees;
	// 	if (!this.state.sortEmail) {
	// 		emailSort.sort((a, b) => (a.email > b.email ? 1 : -1));
	// 		this.setState({
	// 			employees: emailSort,
	// 			sortEmail: true,
	// 		});
	// 	} else {
	// 		emailSort.reverse((a, b) => (a.email < b.email ? -1 : 1));
	// 		this.setState({
	// 			employees: emailSort,
	// 			sortEmail: false,
	// 		});
	// 	}
	// };

	// //  sort by phone function, reversing then resorting on alternating clicks
	const handleSortPhone = () => {
		const phoneSort = employees;
		if (!sortPhone) {
			phoneSort.sort((a, b) => (a.phone > b.phone ? 1 : -1));
			setEmployees(phoneSort);
			setSortPhone(true);
		} else {
			phoneSort.reverse((a, b) => (a.phone < b.phone ? -1 : 1));
			setEmployees(phoneSort);
			setSortPhone(false);
		}
	};

	// //  update the state.search value instantly as input is entered in form
	const handleSearch = (e) => {
		const value = e.target.value;
		setSearch(value);
		console.log(search);
	};

	// // onClick take the contents of the input and use it to filter employees
	const handleSubmit = (e) => {
		e.preventDefault();
		// If searchbar is empty, entire list is returned
		if (search === '') {
			this.searchEmployees();
		} else {
			setEmployees([
				...employees.filter((employee) => employee.name.includes(search)),
			]);
		}
	};

	return (
		<div className='text-center'>
			{/* Header searchbar here */}
			<SearchBar
				value={search}
				handleSearch={handleSearch}
				handleSubmit={handleSubmit}
			></SearchBar>

			<EmployeeTable
				handleSortID={handleSortID}
				handleSortPhone={handleSortPhone}
				// handleSortEmail={this.handleSortEmail}
				// handleSortName={this.handleSortName}
			>
				<Directory employees={employees} />
			</EmployeeTable>
		</div>
	);
};

export default App;
