import React from 'react';
import './search-box.style.css';

// destructuring props between parentheses below
export const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <input className='search' type='search' placeholder={placeholder}
          onChange={handleChange}
        />
    )
}