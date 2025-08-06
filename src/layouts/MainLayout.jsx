import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import backgroundImage from "./background.jpg";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-hero-pattern bg-cover bg-center bg-fixed">
      <div
        className="min-h-screen bg-cover bg-center m-0 p-0 mt-[-1px]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Navbar />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};



export default MainLayout;
