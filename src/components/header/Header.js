import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header class='header'>
            <div>
                <Link className='links' to="/">Home</Link>
            </div>

            <nav className='navbar'>
                <ul>
                    <Link className='links' to="/register" exact>Register</Link>
                </ul>
                
            </nav>
        </header>
    )
}

export default Header;
