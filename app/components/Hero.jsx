import React from "react";
import Background from "../assets/tortilla.jpg";
import foto from "../assets/Local.jpg";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover brightness-50">
      <Image
      alt="Imagen fondo de pagina"
      loading="eager"
      placeholder="blur"
      className="object-cover w-full h-full -z-50"
      src={Background}
      
      />
      <div />
    </div>
  );
};

export default Hero;
