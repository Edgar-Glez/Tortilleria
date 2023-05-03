import Image from "next/image";
import React from "react";
import Tortilla from "../assets/tortilla.jpg";
import LogoFull from "../assets/logo.png";
import Informacion from "./parte2";
import styles from "../styles/Inicio.module.css";

const Inicio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={Tortilla}
          alt="Imagen tortilla"
          width={1920}
          height={1080}
          priority
          className="object-cover brightness-50"
          style={{ objectFit: "cover", intrinsic: "true" }}
        />
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
