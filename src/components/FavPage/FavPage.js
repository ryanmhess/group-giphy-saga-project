import React from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

function FavPage() {
   const dispatch = useDispatch();
    const favList = useSelector(store => store.favListReducer);
    //will use above to get favs after I GET/set them

    useEffect(() => {
        fetchFavList();
        fetchCategories(); //does this make sense here?
    }, []);

    //to GET the current FAV LIST
    const fetchFavList = () =>{
        dispatch({
            type: 'SAGA.FETCH_FAVLIST' 
        })
    }

    //to get the category data from category table
    //sending to reducer
    const fetchCategories =() => {
        dispatch({
            type: 'SAGA.FETCH_CATEGORIES'
        })

    }


    
    return (
        <div>
        <h1>I'm the FavPage</h1>
        {favList.map(fav =>{
            return(
            <img key={fav.id} src={fav.url}></img>
            )
        })}
        </div>
    );
}

export default FavPage;