import React from 'react';
import api from '/api/base';

export default class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            prods: [],
            totalNum : 0,
            error:""
        };
    }

    async componentDidMount() {
        const prodInfo = await api.reloadOmdbDatas();
        let prods = [];
        let errorMsg = "";
        for (let [key, value] of Object.entries(prodInfo)) {
            if(key == "Search") {
                prods = value;
            }
            if (key == "Error") {
                errorMsg = value;
            }
        }
        this.setState({
            'prods': prods,
            "error": errorMsg
        });    
        
    }

    render() {
        const { error } = this.state;
        const { prods } = this.state;

        let movieList = "";
        if (error.length == 0 ) {
            movieList = prods.map((prod, index) => {
                return (
                    <li key={index} className="prod">
                        <span className="prod-info"><img width="120" src={prod.Poster} alt={prod.imdbID} /><span><a href={prod.imdbID} >{prod.Title}</a></span><span>({prod.Year})</span><span>({prod.Type})</span></span>
                    </li>
                );
            })
        } else {
            movieList = <li className="error-message" >{error}</li>;
        }

        return(
            <div className="prods">
                <div className="prods-head">
                    <span className="prods-title">SEARCH RESULTS FOR：Batman</span>
                    <span>VIEW：<span className='search-type'>exact title matches</span></span>
                </div>
                <div className="prods-content">
                    <ul>
                       {movieList}
                    </ul>
                </div>
            </div>
        );
    }
}