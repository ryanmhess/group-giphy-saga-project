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
import Grid from '@mui/material/Grid';

function FavImageCard({ image, imageID }) {
    const dispatch = useDispatch();
    const categoryList = useSelector(store => store.categoriesReducer);

    //MUI buttonstuff
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {

        setAnchorEl(null);
    };
    const handleSelectCategory = (event) => {
        setImageCategory(event.target.value);
        setAnchorEl(null);
    }
    //for PUT route to change category
    //Called on Button click"
    const setImageCategory = (catID) => {
        dispatch({
            type: 'SAGA.SET_CATEGORY',
            payload: {catID, imageID}
        })
    }

    return (
        <div>
            <Grid item xs={8} sm={4} md={3}>
                <CardContent>
                    <img src={image}></img>
                </CardContent>
                <Button position="absolute" id="basic-button" className="categorySelectorButton" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                    Select Category
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
                            onClick={handleSelectCategory}
                        >
                            {category.name}
                        </MenuItem>
                        ))}
                </Menu>

            </Grid>
        </div>
    );


//     <Grid container spacing={2}>
//     {searchResult.map(item => (
//         <Grid item xs={8} sm={4} md={3}>
//             <Item key={item.id} sx={{ Width: 100, Hieght: 100}}>
//             <Stack spacing={2} direction="column">
//                 <img src={item.images.fixed_height_small.url}/>
//                 <Button variant="outlined">Favorite</Button>
//                 </Stack>
//             </Item>
//         </Grid>
//     ))}
// </Grid>


}

export default FavImageCard;