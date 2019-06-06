import React from 'react';


const Product = ({ omdbs }) => {
   return (
      <ul>{
        omdbs.map((omdb, index) => {
            return <li key={index}>{omdb}</li>
        })
      }</ul>
   )
}


export default Product