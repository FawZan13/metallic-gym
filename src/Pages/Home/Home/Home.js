import React from 'react';
import Services from '../Services/Services';
import Banner from '../Banner/Banner'
import Update from '../Update/Update';
import PersonalTrainer from '../PersonalTrainer/PersonalTrainer';

//home section
const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <PersonalTrainer></PersonalTrainer>
            <Update></Update>
        </div>
    );
};

export default Home;