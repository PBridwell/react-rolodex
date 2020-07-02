import React from 'react';

// create navbar with search form inline
function SearchBar(props) {
	return (
		<nav className='navbar navbar-dark bg-light'>
			<h2>
				<i className='fa fa-address-book' aria-hidden='true'></i> Welcome to the
				React Rolodex
			</h2>
			{/* create the form and use handleSearch for input and HandleSubmit for button */}
			<form className='form-inline'>
				<input
					style={{ margin: '5px' }}
					onChange={props.handleSearch}
					value={props.value}
					name='search'
					type='text'
					className='form-control'
					placeholder='Search For an Employee'
					id='search'
				/>
				<button
					className='btn btn-outline-warning my-2 my-sm-0'
					type='submit'
					onClick={props.handleSubmit}
					style={{ padding: '5px', margin: '5px' }}
				>
					Search
				</button>
			</form>
		</nav>
	);
}

export default SearchBar;
