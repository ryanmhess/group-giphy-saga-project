import React from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';

function FavPage() {
   const dispatch = useDispatch();
    const favList = useSelector(store => store.favListReducer);
    const categoryList = useSelector(store => store.categoriesReducer);
    //will use above to get favs after I GET/set them
    const [selected, setSelected] = useState('');

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

    //for PUT route to change category
    //Called on Button click"
    const setImageCategory = () => {
        dispatch({
            type: 'SAGA.SET_CATEGORY'
        })
    }

    const submit = () =>{
        console.log(selected);
    }

    
    return (
        <div>
        <h1>I'm the FavPage</h1>
        {favList.map(fav =>{
            return(
           <div>
                <img key={fav.id} src={fav.url}></img>
            <form>
      <select
            value={selected}
            onChange={e => setSelected(e.target.value)}>
        {categoryList.map((category) => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <button type="button" onClick={submit}> Submit</button>
    </form>
    </div>
            )
        })}
        </div>
    );
}

// {categoryList.map(category =>{
//     return(
//         <p key={category.id}>{category.name}</p>
//     )
// })}

export default FavPage;