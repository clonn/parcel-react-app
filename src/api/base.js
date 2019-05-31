import axios from 'axios';

module.exports = {
  async reloadTodoDatas() {
    let { data: response } = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return response;
  },

	async getMovieInfo(keyword = 'Batman') {
    let { data: response } = await axios.get('http://www.omdbapi.com/?s=' + encodeURI(keyword) + '&apikey=34472924');
    return response;
	}
};
