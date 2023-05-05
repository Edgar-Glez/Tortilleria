import Image from "next/image";
import React from "react";
import LogoFull from "../assets/logo.png";
import Informacion from "./parte2";
import styles from "../styles/Inicio.module.css";
import Hero from "../components/Hero";

const Inicio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Hero />
        <div className={styles.bottom}>
          <Informacion />
        </div>
      </div>
      <div className={styles.logoContainer}>
        <Image
          className={styles.logo}
          src={LogoFull}
          alt="Logo Empresa"
          width={10000}
          height={10000}
          priority
        />
      </div>
    </div>
  );
};

export default Inicio;
