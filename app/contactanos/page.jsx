"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Footer from "../footer/footer2";
import styles from "../styles/MapGoogle.module.css";
import styless from "../styles/Schedule.module.css";
import stylesss from "../styles/Titulo.module.css";

const Contactanos = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    setHydrated(true);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [minHeight, setMinHeight] = useState("130vh");

  const [mapClass, setMapClass] = useState("lg:ml-35 lg:mr-40");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setMinHeight("170vh");
      } else {
        setMinHeight("130vh");
      }
      if (width === 412) {
        setMapClass("mr-[13%]");
      } else if (width === 375) {
        setMapClass("mr-[24%]");
      } else {
        setMapClass("mr-[27%] lg:ml-35 lg:mr-40");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {hydrated && (
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`${stylesss["titulo"]}`}>
                <p className="mt-2 text-3xl leading-8 lg:pt-[10%] pt-[20%] font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  ¡Contáctanos!
                </p>
                <p
                  className={`mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto ${styless["contenido"]}`}
                >
                  ¿Tiene alguna pregunta o simplemente quiere decir hola? Nos
                  encantaría saber de usted. Envíanos un mensaje y te responderé
                  lo antes posible.
                </p>
              </div>
              <div className="mt-10">
                <dl className="sm:grid sm:grid-cols-2 sm:gap-8">
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="mr-3 h-10 w-10"
                    />
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Nos encontramos en:
                    </dt>
                    <dd className="ml-4 text-base text-gray-500">
                      Calle Ámbar #130 Col. Valle Verde.
                    </dd>
                    {/* <dd className="ml-4 text-base text-gray-500">
                    Sobre la calle de las segundas, a un
                    costado de Prim. Anexa a la normal
                  </dd> */}
                  </div>
                  <div className="mt-8 mb-8 sm:mt-0 flex items-center">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="mr-3 h-10 w-10"
                    />
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Pedidos a{" "}
                      <span className="text-[#1BD741] text-stroke-black text-stroke-[5px]">
                        WhatsApp
                      </span>
                      :
                    </dt>
                    <dd className="ml-4 text-base text-blue-600 underline">
                      <a href="tel:+16462612698">(646) 261 2698</a>
                    </dd>
                  </div>
                  <div className={`${styless["schedule-section"]}`}>
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="mr-2 h-10 w-10"
                    />
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Horarios:
                    </dt>
                    <dd className="ml-4 text-base text-gray-500">
                      <ul className="list-disc pl-5">
                        <li>Lunes (Dia Laboral): 6 AM&ndash;3 PM</li>
                        <li>Martes: 6 AM&ndash;3 PM</li>
                        <li>Miercoles: 6 AM&ndash;3 PM</li>
                        <li>Jueves: 6 AM&ndash;3 PM</li>
                        <li>Viernes: 6 AM&ndash;3 PM</li>
                        <li>Sabado: 6 AM&ndash;3 PM</li>
                        <li>Domingo: 6 AM&ndash;3 PM</li>
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div
              className={`${styles["google-map"]} my-4 ${mapClass} flex flex-col gap-4`}
              style={{ maxWidth: "80%" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d846.9624000360925!2d-116.60602934930635!3d31.883505980504825!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d88d27f547cdfd%3A0x23b78116615bd733!2sTortiller%C3%ADa%20Valle%20Verde!5e0!3m2!1sen!2smx!4v1682195323450!5m2!1sen!2smx"
                width={width > 768 ? 1216 : 310}
                height={width > 768 ? 450 : 200}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div> .</div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Contactanos;
