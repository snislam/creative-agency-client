import React from 'react';
import PageTitle from '../../Common/PageTitle';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home" />
            <Navbar />
            <h1>Hello every one</h1>
        </div>
    );
};

export default Home;