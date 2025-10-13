import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Partner from '../Partner/Partner';
import SinglePartner from '../Partner/SinglePartner';

const Root = () => {
    return (
       <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Partner></Partner>
        <Footer></Footer>
        </>
    );
};

export default Root;