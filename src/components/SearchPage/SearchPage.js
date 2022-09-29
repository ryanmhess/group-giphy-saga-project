import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

function SearchPage() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const searchResult = useSelector(store => store.searchResultReducer);
    
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');

    const searchGifs = (event) => {
        console.log(searchValue);
        dispatch({
            type: 'SAGA.SEARCH_VALUE',
            payload: searchValue
        })
    }

    const favoriteThis = (url) => {
        console.log(url);
        dispatch({
            type: 'SAGA.CREATE_FAV',
            payload: url
        })
    }

    return (
        <Box>
            <h1>I'm the SearchPage</h1>
            <Paper elevation={7} color="secondary">
                <TextField id="outlined-basic" label="Search" variant="outlined" onChange ={event => setSearchValue(event.target.value)}/>
                <Button variant="outlined" onClick={searchGifs}>Submit</Button>   
            <Grid container spacing={2}>
                {searchResult.map(item => (
                    <Grid key={item.id} item xs={8} sm={4} md={3}>
                        <Item  sx={{ Width: 100, Hieght: 100}}>
                            <Stack spacing={2} direction="column">
                                <img src={item.images.original.url}/>
                                <Button variant="outlined" onClick={(event) => favoriteThis(item.images.original.url)}>Favorite</Button>
                            </Stack>
                        </Item>
                    </Grid>
                ))}
            </Grid>
            </Paper>
        </Box>
    );
}

export default SearchPage;