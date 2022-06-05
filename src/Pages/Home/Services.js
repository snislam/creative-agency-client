import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Common/Loading';
import ServiceCard from './ServiceCard';

const Services = () => {
    const { data: services, isLoading } = useQuery('services', () => fetch('Services.json').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className='text-4xl font-bold text-center py-5 mb-10'>Provide awesome <span className='text-green-500'>services</span></h2>
            <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-12 gap-5'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;