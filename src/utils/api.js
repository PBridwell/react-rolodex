import axios from 'axios';
const URL = 'https://randomuser.me/api/';

// make the axios call to the jsonplaceholder site and get a users list
export default {
	search: function () {
		return axios.get(URL);
	},
};
