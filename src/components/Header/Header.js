import React from 'react';
import { useHistory } from 'react-router-dom'

function Header() {

    const history = useHistory();

    const mainPage = () => {
        history.push('/');
    }

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