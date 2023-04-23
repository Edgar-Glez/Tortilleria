'use client'
import { useEffect, useState } from "react";
import React from 'react'
import Footer from '../footer/footer2'
import styles from '../styles/MapGoogle.module.css'

const Contactanos = () => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [hydrated, setHydrated] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    setHydrated(true);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      { hydrated && (
          <div className='contactanos-container bg-[#F6EFD5] md:min-w-[1225px]' style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <div className='justify-center pt-24 flex sd:flex-row flex-col gap-4 my-class px-[10%]'>
            <div className='pr-14'>
              <h1 className='text-5xl'>¡Contáctanos!</h1>
              <h2 className='text-2xl pt-6 font-bold'>Pedidos a <span className='text-[#1BD741] text-stroke-black text-stroke-[5px]'>WhatsApp</span> </h2>
              <h2 className='text-2xl'>(646) 261 2698 </h2>
              <h2 className='text-2xl pt-6 font-bold'>Nos encontramos en:  </h2>
              <h2 className='text-2xl'>Calle Ámbar #130 Col. Valle Verde. </h2>
              <h2 className='text-2xl'>(Sobre la calle de las segundas, a un  </h2>
              <h2 className='text-2xl'>costado de Prim. Anexa a la normal) </h2>
            </div>
          </div>
          <div className={`${styles['google-map']} my-12 mx-auto flex-grow`} style={{ maxWidth: "80%" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d846.9624000360925!2d-116.60602934930635!3d31.883505980504825!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d88d27f547cdfd%3A0x23b78116615bd733!2sTortiller%C3%ADa%20Valle%20Verde!5e0!3m2!1sen!2smx!4v1682195323450!5m2!1sen!2smx"
              width={width > 768 ? 1216 : 400}
              height={width > 768 ? 450 : 300}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <Footer/>
        </div>
      )}
      </>
  );
};

export default Contactanos