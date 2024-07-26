// portfolio-react\frontend\src\components\LogoSection.jsx
import React from "react";
import Logo from "../components/Logo"; // Import the Logo component
import '../styles/components/LogoSection.css'; // Import the LogoSection.css file

const LogoSection = () => {
    return (
        <div className="logo-section">
            <div className="logo-container">
                <Logo />
            </div>
            <div className="text-container">
                <h1>Data Point Solutions</h1>
                <p>Innovative Solutions in the Digital Frontier</p>
            </div>
        </div>
    );
};

export default LogoSection;