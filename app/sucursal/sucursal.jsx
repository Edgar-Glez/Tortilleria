"use client";
import React, { useState, useEffect } from "react";
import Sucursal1 from "../assets/sucursal.jpg";
import Sucursal2 from "../assets/sucursal2.jpg";
import Sucursal3 from "../assets/sucursal3.jpg";
import { Card, Text } from "@nextui-org/react";
import styles from "../styles/Sucursal.module.css";

const Sucursal = () => {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsWideScreen(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Sucursales = [
    {
      src: Sucursal1.src,
      nombre: "Nombre Sucursal",
      direccion: "Calle 1, Ensenada B,C",
      color: "red",
    },
    {
      src: Sucursal2.src,
      nombre: "Nombre Sucursal",
      direccion: "Calle 2, Ensenada B,C",
      color: "gold",
    },
    {
      src: Sucursal3.src,
      nombre: "Nombre Sucursal",
      direccion: "Calle 3, Ensenada B,C",
      color: "red",
    },
  ];

  return (
    <div>
      <h4
        className="pt-5 pb-2 font-bold lg:text-[60px] text-[25px] text-[#3C9B35]"
        style={{
          textShadow: "0 0 10px #fff",
          marginLeft: isWideScreen ? "30%" : "auto",
          marginBottom: "24px",
          textAlign: isWideScreen ? "left" : "center",
        }}
      >
        Nuestras Sucursales son:
      </h4>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        {Sucursales.map((sucursal) => (
          <div
            key={sucursal.src}
            style={{ position: "relative", marginBottom: "24px" }}
          >
            <Card
              isHoverable
              style={{
                backgroundImage: `url(${sucursal.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "270px",
                height: "270px",
                borderRadius: "50%",
              }}
              className={styles.circle}
            >
              <div
                className={`${styles.fill} ${styles[sucursal.color]}`}
                style={{
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  opacity: 0.8,
                }}
              ></div>
            </Card>
            <div
              style={{
                marginTop: "12px",
                marginBottom: "12px",
                textAlign: "center",
                width: "100%",
              }}
            >
              <Text>{sucursal.nombre}</Text>
              <Text
                size={12}
                weight="bold"
                transform="uppercase"
                color="#020202aa"
              >
                {sucursal.direccion}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sucursal;
