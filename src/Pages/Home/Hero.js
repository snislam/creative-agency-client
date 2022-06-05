import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../images/logos/Frame.png'

const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center container mx-auto px-12 py-12'>
            <div className='flex-1 pr-20'>
                <h1 className='text-5xl font-bold'>Let’s Grow Your <br /> Brand To The <br /> Next Level</h1>
                <p className='text-md text-slate-900 my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                <button className='bg-[#111430] py-2 px-4 text-white rounded-sm'><Link to='#contact-us'>Hire Us</Link></button>
            </div>
            <div className='flex-1 hidden md:block'>
                <img className='w-[625px] h-[423px]' src={hero} alt="creative agency" />
            </div>
        </div>
    );
};

export default Hero;