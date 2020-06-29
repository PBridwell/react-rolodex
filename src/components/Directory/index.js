import React, { Component } from 'react';
import EmployeeList from '../EmployeeList/index';
import PropTypes from 'prop-types';

// reference the employlist child component cycing through all employees imported using the map function
class Directory extends Component {
	render() {
		return this.props.employees.map((employee) => (
			<EmployeeList key={employee.id} employee={employee} />
		));
	}
}

// proptypes
Directory.propTypes = {
	employees: PropTypes.array.isRequired,
};

export default Directory;
