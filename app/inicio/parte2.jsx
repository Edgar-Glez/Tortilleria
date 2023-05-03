"use client";
import Image from "next/image";
import React from "react";
import Background from "../assets/Background.png";
import "../../styles/globals.css";
import MaquinaTortilla from "../assets/MaquinaTortillas.gif";
import Tortilla from "../assets/tortillaV.png";
import Footer from "../footer/footer";
import Sucursal from "../sucursal/sucursal";
import Cards from "../card/cards";

const Informacion = () => {
  return (
    <div className="informacion-container bg-[#F6EFD5] ">
      <h1 className="bold text-center info-titulo text-2xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl leading-tight md:leading-snug lg:leading-normal xl:leading-loose">
        ¡La más alta <span className="info-span">calidad!</span>
      </h1>
      <Cards />
      <Sucursal />
      <div className="pt-[30%] mx-[6%] relative mb-[5%]">
        <Image
          src={MaquinaTortilla}
          alt="Tortillas gif"
          priority
          className="absolute top-0 left-0 w-full h-[120%] object-cover rounded-3xl"
        />
      </div>
      <div> .</div>
      <Footer className="mt-auto mb-auto" />
      <div> .</div>
    </div>
  );
};

export default Informacion;
