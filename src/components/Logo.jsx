// portfolio-react\frontend\src\components\Logo.jsx
import React from 'react';
import logo from '../assets/TransparentLogoIcon.svg';

import '../styles/components/Logo.css';

const Logo = () => {
    return (
        <div className='logo-container'>
            <img src={logo} alt="Logo" className="logo" />
        </div>
    );
};

export default Logo