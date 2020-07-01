// import React, { Component } from 'react';
import EmployeeList from '../EmployeeList/index';
import PropTypes from 'prop-types';

import React from 'react';

const Directory = (props) => {
	return props.employees.map((employee) => (
		<EmployeeList key={employee.id} employee={employee} />
	));
};
// proptypes
Directory.propTypes = {
	employees: PropTypes.array.isRequired,
};

export default Directory;
