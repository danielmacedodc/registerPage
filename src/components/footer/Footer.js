import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="links">
                <Link className="ls" to="/">Home</Link>
                <Link className="ls">Site Developed by Daniel from Hiring Coders Challenge</Link>
            </ul>

            <ul className="links">
                <Link className="ls">Book your flight</Link>
            </ul>
        </footer>
    )
}

export default Footer
