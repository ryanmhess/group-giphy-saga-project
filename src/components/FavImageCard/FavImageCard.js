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
                            onClick={handleSelectCategory}
                        >
                            {category.name}
                        </MenuItem>
                        ))}
                </Menu>
                </Card>
        </div>
    );
}

export default FavImageCard;