import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function SearchPage() {

    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');

    const searchGifs = (event) => {
        console.log(searchValue);
        dispatch({
            type: 'SEARCH_VALUE',
            payload: searchValue
        })
    }

    return (
        <div>
            <h1>I'm the SearchPage</h1>
            <input onChange ={event => setSearchValue(event.target.value)}></input>
            <button onClick={searchGifs}>Submit</button>
        </div>
    );
}

export default SearchPage;