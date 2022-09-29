import React from 'react';
import { useHistory } from 'react-router-dom'

function Header() {

    const history = useHistory();


    //  This function takes advatage of useHistory to navigate to a specified url.
    const mainPage = () => {
        history.push('/');
    }

    //  This function takes advatage of useHistory to navigate to a specified url.
    const favPage = () => {
        history.push('/favpage');
    }

    return (
        <header>
            <h1>I'm the Header</h1>
            <button onClick={mainPage}>Main</button>
            <button onClick={favPage}>FavPage</button>
        </header>
    );
}

export default Header;