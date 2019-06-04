import axios from 'axios'

module.exports = {
    async requestMovieInfo (search = "Batman") {
        let {data : info} = await axios.get(`http://www.omdbapi.com/?s=${search}&apikey=34472924`)
        return info
    }
}