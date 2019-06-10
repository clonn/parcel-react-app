import React from 'react'
import '../style/product.css'
import '../style/extra.css'

export default class Product extends React.PureComponent {
    constructor (props) {
        super(props)
        this.state = {
            movies : []
        }
    }

    render () {
        let { movies } = this.props

        
            return (movies.Search ?
                    (<div>
                        {/* <h1>Movie List</h1> */}
                            {movies.Search.map( (movie) => {
                            
                                return (
                                     <div key = {movie.imdbID} className = "listTemplate">
                                        <img src = {movie.Poster} width = "50px" height = "70px" alt = {movie.Title}/>
                                        <strong className = "verticalCenter">
                                            <a className = "linkNoUnderLine" href = {movie.Poster} target = "_blank"> {movie.Title} </a>
                                            ( {movie.Year} )
                                            ( {movie.Type} )
                                        </strong>
                                    </div>
                                )
                            })}
                    </div>) :
                    (<div>Waiting...</div>)
            )
    }
}