"use client";
import React, { useEffect, useState } from "react";
import Footer from "../footer/footer2";
import Logo from "../assets/logoCompleto.jpg";
import Image from "next/image";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faShop } from "@fortawesome/free-solid-svg-icons";

const AboutPage = () => {
  const [minHeight, setMinHeight] = useState("100vh");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setMinHeight("270vh");
      } else {
        setMinHeight("120vh");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="contactanos-container bg-[#F6EFD5] md:min-w-[1225px]"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: minHeight,
      }}
    >
      <div
        className="justify-center pt-23 flex sd:flex-row flex-col gap-4 my-class px-[10%]"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <div className="justify-center pt-2 flex sd:flex-row flex-col gap-4 my-class  items-center">
          <Head>
            <link
              href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400&display=swap"
              rel="stylesheet"
            />
          </Head>
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-36 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Acerca de Tortillería Valle Verde
                </h2>
                <p className="mt-3 text-xl text-gray-500 sm:mt-4 text-justify">
                  Nuestra historia comienza hace 40 años con la franquicia de
                  máquinas tortilladoras Celorio por Don Juan Velazco y hace 20
                  años la inauguración de la exitosa tortillería Real del Maíz
                  por su esposa Adela Esquivel. Ahora, su hijo menor junto con
                  su pareja, continúan el legado familiar con la motivación de
                  lograr la mejor tortilla de maíz de Ensenada para honrar la
                  memoria de sus padres.
                </p>
                <div className="justify-center pt-5 flex sd:flex-row flex-col gap-4 my-class  items-center">
                  <Image
                    src={Logo}
                    alt="Logo Empresa"
                    className="h-[320px] w-[400px] rounded-lg"
                  />
                </div>
              </div>
              <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-0 lg:grid-cols-2">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#3C9B35] text-white">
                      <FontAwesomeIcon icon={faShop} className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      ¿Qué es Tortillería Valle Verde?
                    </h3>
                    <p className="mt-2 text-base text-gray-500 text-justify">
                      Tortillería Valle Verde es un negocio familiar con más de
                      40 años de experiencia en la producción de tortillas de
                      maíz y harina en Ensenada. Con ingredientes frescos y
                      técnicas tradicionales, honramos el legado de nuestros
                      padres y abuelos. Nos enorgullece satisfacer a nuestros
                      clientes y comprometernos con la comunidad local.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#3C9B35] text-white">
                      <FontAwesomeIcon icon={faUsers} className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Nuestra misión
                    </h3>
                    <p className="mt-2 text-base text-gray-500 text-justify">
                      Nuestra misión en Tortillería Valle Verde es producir las
                      mejores tortillas de maíz y harina en Ensenada,
                      manteniendo las tradiciones familiares y utilizando
                      ingredientes naturales. Buscamos la satisfacción de
                      nuestros clientes y el compromiso con la comunidad local.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
