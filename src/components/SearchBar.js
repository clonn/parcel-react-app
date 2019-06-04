import React, { useState } from "react";
import "../css/searchBar.css";
import Button from '@material-ui/core/Button';

const SearchBar = ({ keyword, search }) => {
    const [key, setKeyword] = useState(keyword || '');
    return (
        <div>
            <h3 className="search-title">電影查詢</h3>
            <div className="search-bar">
                
                <input 
                    className="search-input" 
                    type="text" 
                    placeholder="電影名稱" 
                    value={key} 
                    autoFocus={true}
                    onChange={(e)=> setKeyword(e.target.value)}
                    onKeyDown={(e)=> {
                        if (e.key === 'Enter') {
                            search(key);
                        }
                    }}
                /> 
                <Button className="btn-search" variant="contained" color="primary" onClick={() => search(keyword)}>搜尋</Button>
            </div>
        </div>
    )
}

export default SearchBar;