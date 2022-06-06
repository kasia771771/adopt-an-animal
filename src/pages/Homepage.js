import React from 'react';
import Header from "../components/Header";
import About from "../components/About";
import AboutAdoption from "../components/AboutAdoption";
import Help from "../components/Help";

const Homepage = () => {
    return (
        <>
            <Header/>
            <About/>
            <AboutAdoption/>
            <Help/>
        </>

    );
};

export default Homepage;