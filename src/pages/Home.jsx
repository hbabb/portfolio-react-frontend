import React from 'react';
import '../styles/pages/Home.css';
import profilePic from '../assets/ai-profile-corporate.jpg';
import LogoSection from '../components/LogoSection';

const Home = () => {
    return (
        <div className="md:p-6 bg-gray-800 text-white flex flex-col lg:flex-row items-start lg:items-start space-y-0 lg:space-y-0 lg:space-x-8">
            <div className="flex-shrink-0 flex justify-center lg:justify-start">
                <div className="profile-container">
                    <div className="profile-pic">
                        <img src={profilePic} alt="Profile Picture" />
                    </div>
                </div>
            </div>
            <div className="flex-grow">
                <h1 className="name">Heath Babb, CST I</h1>
                <h2 className='heading'>Summary</h2>
                <p className='summary'>
                    Welcome! I am the founder and owner of HB Consultants LLC, operating as Data Point Solutions. With over 20 years of experience in the land surveying, civil engineering, and construction industries, I bring a strong background in land surveying and real estate to the table. As a Certified Survey Technician with the National Society of Professional Surveyors, I have worked on many projects, from small land surveys to large-scale construction projects.
                </p>
                <p className='summary'>
                    My passions are technology, innovation, and collaboration. I am dedicated to helping my clients achieve their goals by providing the highest level of service. Continuously seeking opportunities to learn and grow, I strive to improve my skills and knowledge to serve my clients better.
                </p>
                <p className='summary'>
                    Aside from managing my business, I am a senior CAD technician with extensive experience in roles such as CAD manager, CNC machinist, and estimator. My academic journey includes multiple degrees in engineering and technology fields, equipping me with broad expertise in numerous CAD software and technologies. My career is defined by a relentless pursuit of excellence and continuous learning, ensuring that I deliver the highest-quality service to both clients and employers.
                </p>
                <p className='summary'>
                    I am furthering my education through online courses at <a href="https://www.udemy.com" className="weblink">Udemy.com</a>, <a href="https://www.codecademy.com/learn" className='weblink'>Codecademy.com</a>, <a href="https://www.freecodecamp.org" className="weblink">FreeCodeCamp.org</a>, and <a href='sccsc.edu' className='weblink'>Spartanburg Community College</a>, focusing on web development, Geospatial Information Systems (GIS), and business.
                </p>
                <p className='summary'>
                    I am eager to join forces with you and introduce you to Innovative Solutions in the Digital Frontier. Together, we can push the boundaries of what is possible and explore brave new worlds of technology. Let&apos;s create something amazing together!
                </p>
                <div className='logo-section'>
                    <LogoSection />
                </div>
            </div>
        </div>
    );
};

export default Home;
