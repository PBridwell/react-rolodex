import axios from 'axios';
const URL = 'https://jsonplaceholder.typicode.com/users';

// make the axios call to the jsonplaceholder site and get a users list
export default {
	search: function () {
		return axios.get(URL);
	},
};
