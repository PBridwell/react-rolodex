import React from 'react';

// setup the table headers with sort
function EmployeeTable(props) {
	return (
		<table className='table table-striped table-dark'>
			<thead className='thead-light'>
				<tr>
					<th scope='col'>
						ID#{' '}
						<i
							onClick={props.handleSortID}
							className='fa fa-sort'
							aria-hidden='true'
						></i>
					</th>
					<th scope='col'>
						Name{' '}
						<i
							onClick={props.handleSortName}
							className='fa fa-sort'
							aria-hidden='true'
						></i>
					</th>
					<th scope='col'>
						Email{' '}
						<i
							onClick={props.handleSortEmail}
							className='fa fa-sort'
							aria-hidden='true'
						></i>
					</th>
					<th scope='col'>
						Phone{' '}
						<i
							onClick={props.handleSortPhone}
							className='fa fa-sort'
							aria-hidden='true'
						></i>
					</th>
				</tr>
			</thead>
			<tbody>{props.children}</tbody>
		</table>
	);
}

export default EmployeeTable;
