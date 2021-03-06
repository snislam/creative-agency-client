import React from 'react';
import PageTitle from '../../Common/PageTitle';
import BrandSlider from './BrandSlider';
import Header from './Header';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home" />
            <Header />
            <BrandSlider />
            <Services />
            <h1>Hello every one</h1>
        </div>
    );
};

export default Home;