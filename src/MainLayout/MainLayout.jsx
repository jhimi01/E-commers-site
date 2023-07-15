import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navbar/Navigation';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navigation />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default MainLayout;