import React from "react";
import Inicio from "./inicio/parte1";
import Tortilla from "./assets/tortilla.jpg";
import Image from "next/image";
import LogoFull from "./assets/logo.png";
import Informacion from "./inicio/parte2";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <Inicio />
      </div>
      <div className="py-20 "></div>
    </div>
  );
};

export default HomePage;
