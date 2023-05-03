"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../assets/logo.jpg";
import Image from "next/image";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const rutas = [
  {
    ruta: "/",
    label: "",
    imagen: true,
  },
  {
    ruta: "/productos",
    label: "Productos",
  },
  {
    ruta: "/nuestra-historia",
    label: "Nuestra Historia",
  },
  {
    ruta: "/contactanos",
    label: "Contactanos!",
  },
];

const Navbar = () => {
  const [activeRoute, setActiveRoute] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setActiveRoute(window.location.pathname);
  }, []);

  const handleRouteChange = (ruta) => {
    // cambia el color de la ruta anterior a negro
    const activeLink = document.querySelector(`.navbar-link.active`);
    if (activeLink) {
      activeLink.style.color = "#000";
    }
    setActiveRoute(ruta);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest(".navbar-menu")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="z-20 sticky top-0 font-bold bg-[#3C9B35] text-white text-xl pt-4 align-middle text-center min-w-[100%]">
      {/* Lista de rutas */}
      <ul className="hidden lg:flex">
        {rutas.map(({ ruta, label, imagen }) => (
          <li key={ruta} className="mr-4">
            {imagen ? (
              <Link href={ruta} passHref legacyBehavior>
                <a
                  className="logo-link"
                  onClick={() => {
                    handleRouteChange("/");
                    document
                      .querySelectorAll(".navbar-link")
                      .forEach((link) => (link.style.color = "#000"));
                  }}
                >
                  <Image
                    id="navbar-logo"
                    className="pl-2 pb-2 sticky"
                    src={Logo}
                    alt="Logo"
                    width={50}
                    height={50}
                  />
                </a>
              </Link>
            ) : (
              <Link href={ruta} passHref legacyBehavior>
                <a
                  className={`text-2xl align-bottom navbar-link ${
                    ruta === activeRoute ? "active" : ""
                  }`}
                  onMouseOver={(e) => {
                    e.target.style.color = "#FFF";
                  }}
                  onMouseOut={(e) => {
                    if (ruta !== activeRoute) {
                      e.target.style.color = "#000";
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

      {/* Botón de hamburguesa */}
      <button
        className="text-white hover:text-gray-200 mr-80 pl-5 focus:outline-none lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>

      {/* Menú desplegable */}
      {menuOpen && (
        <div className="bg-transparent pt-2 pb-3 navbar-menu">
          <div key="/" className="px-4">
            <Link href="/" passHref legacyBehavior>
              <a
                className={`text-2xl align-bottom navbar-link ${
                  activeRoute === "/" ? "active" : ""
                }`}
                onClick={() => {
                  handleRouteChange("/");
                  setMenuOpen(false);
                }}
              >
                Inicio
              </a>
            </Link>
          </div>
          {rutas.map(({ ruta, label }) => (
            <div key={ruta} className="py-2 px-4">
              <Link href={ruta} passHref legacyBehavior>
                <a
                  className={`text-2xl align-bottom navbar-link ${
                    ruta === activeRoute ? "active" : ""
                  }`}
                  onClick={() => {
                    handleRouteChange(ruta);
                    setMenuOpen(false);
                  }}
                >
                  {label}
                </a>
              </Link>
            </div>
          ))}
        </div>
      )}
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
