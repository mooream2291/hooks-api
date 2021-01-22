import React from 'react';
import Login from './login';
import Context from './context';

const Header = () => {

    return ( 
    
    <header>
        <Context>
        <Login />
        </Context>
    </header>
    )
}

export default Header;