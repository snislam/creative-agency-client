import React from 'react';

const ServiceCard = ({ service }) => {
    const { icon, serviceName, description } = service;
    return (
        <div className='text-center p-5 shadow-md'>
            <img className='w-16 h-16 rounded-full' src={icon} alt={serviceName} />
            <h2 className='text-2xl font-semibold'>{serviceName}</h2>
            <p className='text-slate-700'>{description}</p>
        </div>
    );
};

export default ServiceCard;