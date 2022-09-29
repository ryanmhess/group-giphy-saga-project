import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
//MUI imports
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

function FavImageCard({ image, imageID }) {
    const dispatch = useDispatch();
    const categoryList = useSelector(store => store.categoriesReducer);
    const [selected, setSelected] = useState('');

    //for PUT route to change category
    //Called on Button click"
    const setImageCategory = (event) => {
        event.preventDefault();
        // console.log(selected);
        dispatch({
            type: 'SAGA.SET_CATEGORY',
            payload: {selected, imageID}

        })
        setSelected(''); //is there where I reset it?  Do I need to?
    }

    return (
        <div>
            <Card className="favImgCard" sx={{maxWidth: 500}}>
                <Typography>
                    GIPHY!
                </Typography>
                <CardContent>
                    <img src={image}></img>
                </CardContent>
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
                </form>
            </Card>
        </div>
    );


// {favList.map(fav =>{
//     return(
//    <div>
//         <img key={fav.id} src={fav.url}></img>
//     <form>
// <select
//     value={selected}
//     onChange={e => setSelected(e.target.value)}>
// {categoryList.map((category) => (
//   <option value={category.id} key={category.id}>
//     {category.name}
//   </option>
// ))}
// </select>
// <button type="button" onClick={submit}> Submit</button>
// </form>
// </div>
//     )
// })}

}

export default FavImageCard;