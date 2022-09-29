import React from 'react';
import FavImageCard from '../FavImageCard/FavImageCard.js';


// MUI display

const dummyObj = [
    'https://media2.giphy.com/media/KUP5hlhpZZvFDj6C7p/200w.webp',
    'https://media4.giphy.com/media/yYnhh4mNbjxVOI9jzL/200w.webp',
	'https://media1.giphy.com/media/wvbZIfs10gYvYeu2BU/200w.webp',
	'https://media3.giphy.com/media/MBZooTpa7pFuoKIrtm/giphy.webp',
	'https://media3.giphy.com/media/joj9epQQPM7p26xySz/giphy.webp'
];


//setup MAP

//setup MUI CARD

// create DROPDOWN with category list.


function FavPage() {
    return (
        <div>
            <h1>I'm the FavPage</h1>
            {dummyObj.map((img, i)=>(
                <FavImageCard key={i} image={img} />
            ))}
        </div>
    );
}

export default FavPage;