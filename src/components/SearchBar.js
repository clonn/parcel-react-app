import React from "react";
import "../css/searchBar.css";
import Button from '@material-ui/core/Button';

const SearchBar = ({ ...props }) => {
    const [keyword, setKeyword] = React.useState(props.keyword);
    return (
        <div>
            <h3 className="search-title">電影查詢</h3>
            <div className="search-bar">
                
                <input 
                    className="search-input" 
                    type="text" 
                    placeholder="電影名稱" 
                    value={keyword} 
                    autoFocus={true}
                    onChange={(e)=> setKeyword(e.target.value)}
                    onKeyDown={(e)=> {
                        if (e.key === 'Enter') {
                            props.search(keyword);
                        }
                    }}
                /> 
                <Button className="btn-search" variant="contained" color="primary" onClick={() => props.search(keyword)}>搜尋</Button>
            </div>
        </div>
    )
}

export default SearchBar;