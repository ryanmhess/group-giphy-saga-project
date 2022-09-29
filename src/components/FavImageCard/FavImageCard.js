import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
//MUI imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function FavImageCard({ image }) {
    const dispatch = useDispatch();
    const categoryList = useSelector(store => store.categoriesReducer);
    const [selected, setSelected] = useState('');

    //MUI buttonstuff
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //for PUT route to change category
    //Called on Button click"
    const setImageCategory = () => {
        console.log(selected);
        dispatch({
            type: 'SAGA.SET_CATEGORY'
        })
    }

    return (
        <div>
            <Card
                className="favImgCard"
                sx={{maxWidth: 500}}
                position="relative"
            >
                <Typography>
                    GIPHY!
                </Typography>
                <CardContent>
                    <img src={image}></img>
                </CardContent>
                <Button
                    position="absolute"
                    id="basic-button"
                    className="categorySelectorButton"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    🍥

                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    {categoryList.map((category) => (
                        <MenuItem
                            key={category.id}
                            value={category.id}
                            onClick={handleClose}
                        >
                            {category.name}
                        </MenuItem>
                        ))}
                </Menu>
                </Card>
        </div>
    );
{   /*formatting from SEARCHPAGE
    /* <Paper elevation={7} color="secondary">
                <TextField id="outlined-basic" label="Search" variant="outlined" onChange ={event => setSearchValue(event.target.value)}/>
                <Button variant="outlined" onClick={searchGifs}>Submit</Button>   
            <Grid container spacing={2}>
                {searchResult.map(item => (
                    <Grid item xs={8} sm={4} md={3}>
                        <Item key={item.id} sx={{ Width: 100, Height: 100}}>
                        <Stack spacing={2} direction="column">
                            <img src={item.images.fixed_height_small.url}/>
                            <Button variant="outlined">Favorite</Button>
                            </Stack>
                        </Item>
                    </Grid>
                ))}
            </Grid>
            </Paper> */}

{/* EVERYTHING BElOW HERE WORKS
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
                    <button type="button" onClick={setImageCategory}> Submit</button>
                </form> */}
 
}

export default FavImageCard;