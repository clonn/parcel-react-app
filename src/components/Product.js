import React from 'react';
import api from '/api/base';

export default class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            prods: [],
            totalNum : 0
        };
    }

    async componentDidMount() {
        const prodInfo = await api.reloadOmdbDatas();
        const prods = Object.values(prodInfo)[0];
        const totalNum = Object.values(prodInfo)[1];
        this.setState({
            'prods': prods,
            'totalNum': totalNum
        });
    }

    render() {
        const { prods } = this.state;
        return(
            <div className="prods">
                <div className="prods-head">
                    <span className="prods-title">SEARCH RESULTS FOR：Batman</span>
                    <span>VIEW：<span className='search-type'>exact title matches</span></span>
                </div>
                <div className="prods-content">
                    <ul>
                        {prods.map((prod, index) => {
                            var prodCss = "prod-line1";
                            if (index % 2 == 1) {
                                prodCss = "prod-line2";
                            }
                            return (
                                <li key={index} className={prodCss}>
                                    <span className="prod-info"><img width="120" src={prod.Poster} alt={prod.imdbID} /><span><a href={prod.imdbID} >{prod.Title}</a></span><span>({prod.Year})</span><span>({prod.Type})</span></span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}