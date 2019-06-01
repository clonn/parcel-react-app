import React from 'react'
import '../style/product.css'

export default class Product extends React.PureComponent {
    constructor (props) {
        super(props)
        this.state = {
            movies : []
        }
    }

    render () {
        let { movies } = this.props
        // movies = movies.Search

        if (movies.Search) {
            console.log(movies)
            return (<div>
                        <h1>Movie List</h1>
                            {movies.Search.map( (movie) => {
                            
                                return (
                                     <div className = "listTemplate">
                                        <img src = {movie.Poster} width = "50px" height = "70px" alt = {movie.Title}/>
                                        <strong className = "verticalCenter">
                                            <a className = "linkNoUnderLine" href = {movie.Poster} target = "_blank"> {movie.Title} </a>
                                            ( {movie.Year} )
                                            ( {movie.Type} )
                                        </strong>
                                    </div>
                                )
                            })}
                    </div>);
        } else return <div>Component Data Is Loading...</div>
    }
}

Product.defaultProps = {
    movies : [],
}