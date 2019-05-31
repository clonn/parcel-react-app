import axios from 'axios'

module.exports = {
    async requestMovieInfo () {
        let {data : info} = await axios.get("http://www.omdbapi.com/?s=Batman&apikey=34472924")
        return info
    }
}