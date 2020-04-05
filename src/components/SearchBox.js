import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return( 
        <div className = "pa2">
        <input 
        className = "pa3 ba b--white bg-white bw2 shadow-5 ma3 tc bg-white br3 pa3"
        type = "search" 
        placeholder = "search for Robot"
        onChange = {searchChange}
        />
        </div>
    )
}

export default SearchBox