// portfolio-react\frontend\src\components\Header.jsx
import React, { useState } from 'react';
import '../styles/components/Header.css'
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <nav className='navbar'>
                <button className='hamburger' onClick={toggleMenu}>
                    {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                </button>
                <ul className={`menu ${isOpen ? 'open' : ''}`}>
                    <li><a href="/" onClick={toggleMenu}>Home</a></li>
                    <li><a href="/resume" onClick={toggleMenu}>Resume</a></li>
                    {/* <li><a href="/project" onClick={toggleMenu}>Projects</a></li> */}
                    <li><a href="/contact" onClick={toggleMenu}>Contact</a></li>
                    {/* <li><a href="/hobbies" onClick={toggleMenu}>Hobbies</a></li>
                    <li><a href="/books" onClick={toggleMenu}>Books</a></li> */}
                </ul>
            </nav>
        </header>
    );
};

export default Header