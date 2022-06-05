import React from 'react';
import uber from '../../images/logos/uber.png'
import google from '../../images/logos/google.png'
import netflix from '../../images/logos/netflix.png'
import slack from '../../images/logos/slack.png'
import airbnb from '../../images/logos/airbnb.png'

const BrandSlider = () => {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 justify-between items-center py-20 container mx-auto px-12'>
            <img className='h-[50px]' src={uber} alt="uber" />
            <img className='h-[50px]' src={google} alt="google" />
            <img className='h-[50px]' src={netflix} alt="netflix" />
            <img className='h-[50px]' src={slack} alt="slack" />
            <img className='h-[50px]' src={airbnb} alt="airbnb" />
        </div>
    );
};

export default BrandSlider;