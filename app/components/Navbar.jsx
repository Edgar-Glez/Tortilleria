'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../assets/logo.jpg';
import Image from 'next/image';

const rutas = [
  {
    ruta: '/',
    label: '',
    imagen: true
  },
  {
    ruta: '/productos',
    label: 'Productos'
  },
  {
    ruta: '/nuestra-historia',
    label: 'Nuestra Historia'
  },
  {
    ruta: '/contactanos',
    label: 'Contactanos!'
  }
];

const Navbar = () => {
  const [activeRoute, setActiveRoute] = useState('');

  useEffect(() => {
    setActiveRoute(window.location.pathname);
  }, []);

  const handleRouteChange = (ruta) => {
    // cambia el color de la ruta anterior a negro
    const activeLink = document.querySelector(`.navbar-link.active`);
    if (activeLink) {
      activeLink.style.color = '#000';
    }
    setActiveRoute(ruta);
  };

  return (
    <nav className="z-20 sticky top-0 font-bold bg-[#3C9B35] text-white text-xl pt-4 align-middle text-center min-w-[100%]">
      <ul className="flex sticky">
        {rutas.map(({ ruta, label, imagen }) => (
          <li key={ruta} className="mr-4">
            {imagen ? (
              <Link href={ruta} passHref legacyBehavior>
                <a className="logo-link" onClick={() => {handleRouteChange('/'); document.querySelectorAll('.navbar-link').forEach(link => link.style.color = '#000')}}>
                  <Image id="navbar-logo" className="pl-2 pb-2 sticky" src={Logo} alt="Logo" width={50} height={50} />
                </a>
              </Link>
            ) : (
              <Link href={ruta} passHref legacyBehavior>
                <a
                  className={`text-2xl align-bottom sticky navbar-link ${ruta === activeRoute ? 'active' : ''}`}
                  onMouseOver={(e) => {
                    e.target.style.color = '#FFF';
                  }}
                  onMouseOut={(e) => {
                    if (ruta !== activeRoute) {
                      e.target.style.color = '#000';
                    }
                  }}
                  onClick={() => handleRouteChange(ruta)}
                >
                  {label}
                </a>
              </Link>
            )}
          </li>
        ))}
      </ul>
      <style jsx>{`
        .navbar-link {
          color: #000;
          transition: color 0.2s ease-in-out;
        }
        .navbar-link.active {
          color: #fff;
          text-shadow: 0 0 2px #fff;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;