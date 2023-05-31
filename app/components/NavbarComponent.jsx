"use client";
import { useState } from "react";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/logo.jpg";
import Link from "next/link";

const rutasMobile = [
  {
    ruta: "/",
    label: "Tortilleria Valle Verde",
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
    label: "Contactanos",
  },
];

const rutas = [
  {
    ruta: "/",
    label: "Tortilleria Valle Verde",
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
    label: "Contactanos",
  },
];

export default function NavbarComponent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [rutaSeleccionada, setRutaSeleccionada] = useState(rutas[0]);

  function handleMenu() {
    setMenuOpen(!menuOpen);
  }

  function handleLogoClick() {
    setRutaSeleccionada(rutas[0]);
  }

  function handleRutaClick(ruta) {
    setRutaSeleccionada(ruta);
  }

  return (
    <nav className="fixed w-full h-28 shadow-md bg-[#3C9B35] z-50">
      <div className="flex justify-between items-center h-full w-full px-10 2xl:px-16 text-white ">
        <Link href={"/"} className="">
          <Image
            // className="pr-10"
            src={Logo}
            width={80}
            height={80}
            alt="logo"
            priority
            onClick={handleLogoClick}
          />
        </Link>
        {/* Main menu */}
        <div className="lg:flex hidden space-x-10">
          {rutas.map((ruta) => (
            <Link href={ruta.ruta} key={ruta.label}>
              <h1
                className={
                  ruta === rutaSeleccionada
                    ? "uppercase border-b-4 border-b-[#F5DA68] text-xl  font-bold text-[#F5DA68]"
                    : "uppercase border-b-4 border-b-transparent hover:border-[#F5DA68] text-xl font-bold hover:text-[#F5DA68]"
                }
                onClick={() => handleRutaClick(ruta)}
              >
                {ruta.label}
              </h1>
            </Link>
          ))}
        </div>

        {/* Menu control */}
        <div onClick={handleMenu} className=" lg:hidden cursor-pointer">
          <AiOutlineMenu size={40} color="white" />
        </div>
        <div
          className={
            menuOpen
              ? "fixed z-50 right-0 top-0 w-[70%] md:hidden h-screen bg-[#3C9B35] bg-opacity-95 text-white p-10 ease-out duration-500"
              : "fixed right-[-100%] top-0 p-10 ease-in-out duration-500"
          }
        >
          <div className="flex w-full items-center">
            <div onClick={handleMenu} className="cursor-pointer">
              <AiOutlineClose size={40} />
            </div>
          </div>

          {/* Display menu mobile */}
          <div className="flex-col space-y-10 mt-3 h-screen">
            {rutasMobile.map((ruta) => (
              <Link href={ruta.ruta} key={ruta.label}>
                <h1
                  onClick={handleMenu}
                  className="mt-5 uppercase hover:border-b hover:border-[#F5DA68] text-xl hover:text-[#F5DA68]"
                >
                  {ruta.label}
                </h1>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
