import axios from 'axios';

module.exports = {
    async reloadTodoDatas() {
        let { data: response } = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return response;
    },
    async getMovieData() {
        let { data: response } = await axios.get('http://www.omdbapi.com/?s=Batman&apikey=34472924');
        return response.Search;
    },

    async getMovieById(id) {
        let { data: response } = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=34472924`);
        return response;
    }
};