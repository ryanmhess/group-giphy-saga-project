import React from 'react';

import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FavImageCard from '../FavImageCard/FavImageCard.js';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

function FavPage() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    
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
        <Box>
            <h1>I'm the FavPage</h1>
            <Grid container spacing={2}>
                {favList.map(fav=>(
                    <Grid key={fav.id} item xs={8} sm={4} md={3}>
                        <Item  sx={{ Width: 100, Hieght: 100}}>
                            Category: {fav.name}
                            <FavImageCard key={fav.id} image={fav.url} imageID={fav.id}/>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}



export default FavPage;