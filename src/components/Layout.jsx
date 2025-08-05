import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';


const Layout = () => {
  return (
    <div className="min-h-screen bg-hero-pattern bg-cover bg-center bg-fixed text-white">
      <Navbar />
      
      <main className="p-4">
        <Outlet />
      </main>
      
     
    </div>
  );
};

export default Layout;