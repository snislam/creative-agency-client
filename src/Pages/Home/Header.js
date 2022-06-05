import React from 'react';
import Navbar from './Navbar';
import bg from '../../images/banner_bg.png';
import Hero from './Hero';

const Header = () => {
    return (
        <div className='w-full h-screen bg-bottom' style={{ backgroundImage: `url(${bg})` }}>
            <Navbar />
            <Hero />
        </div>
    );
};

export default Header;