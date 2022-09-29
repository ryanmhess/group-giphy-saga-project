import React from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

function FavPage() {
   const dispatch = useDispatch();
    const favList = useSelector(store => store.favListReducer);
    //will use above to get favs after I GET/set them

    useEffect(() => {
        fetchFavList();
    }, []);

    const fetchFavList = () =>{
        dispatch({
            type: 'SAGA.FETCH_FAVLIST' 
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