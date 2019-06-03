import React from "react";
import "../css/list.css";

const List = ({list}) => {
    return (
        <tr>
            <td>
                <img src= {list.Poster}  />
            </td>
            <td>
                <p>{list.Title}（{list.Year}）({list.Type})</p>
            </td>
        </tr>
    );
}

export default List;