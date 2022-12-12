import React from 'react';
import NavbarComp from '../components/NavbarComp'
import MainArea from './MainArea';
import Cardsrow from './Cardsrow';

import Footer from "./Footer";

const Home = () => {
    return ( 
        <div>
            <NavbarComp/>
            <MainArea/>
            <Cardsrow/>
            <Footer />
        </div>
    );
}
 
export default Home;