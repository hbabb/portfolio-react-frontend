// portfolio-react\frontend\src\components\Footer.jsx
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import the LinkedIn and GitHub icons
import '../styles/components/Footer.css';

const Footer = () => {    
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Heath Babb.
            All rights reserved.<br /> <em className="construction">THIS SITE IS UNDER CONSTRUCTION</em></p>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/heath-babb" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaLinkedin size={30} />
                </a>
                <a href="https://github.com/hbabb" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaGithub size={30} />
                </a>
            </div>
        </footer>
    )
}

export default Footer;
