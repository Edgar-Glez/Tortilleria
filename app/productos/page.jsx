"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/globals.css";

const productos = [
  {
    id: 0,
    nombre: "Tortilla de maiz a la docena",
    precio: 10,
    stock: 5,
    imagen: require("../productos/image/0.png"),
  },
  {
    id: 1,
    nombre: "Dos docenas de Tortilla de maiz",
    precio: 20,
    stock: 10,
    imagen: require("../productos/image/1.png"),
  },
  {
    id: 2,
    nombre: "Diez docenas de Tortillas de maiz",
    precio: 45,
    stock: 21,
    imagen: require("../productos/image/2.png"),
  },
  {
    id: 3,
    nombre: "Una docenas de tortilla de harina",
    precio: 12,
    stock: 44,
    imagen: require("../productos/image/3.png"),
  },
  {
    id: 4,
    nombre: "Dos docenas de tortillas de harina",
    precio: 21,
    stock: 32,
    imagen: require("../productos/image/4.png"),
  },
  {
    id: 5,
    nombre: "Salsa Macha el mijito",
    precio: 15,
    stock: 29,
    imagen: require("../productos/image/5.png"),
  },
  {
    id: 6,
    nombre: "Media docena de Tortilla de maiz",
    precio: 17,
    stock: 54,
    imagen: require("../productos/image/6.png"),
  },
  {
    id: 7,
    nombre: "Tres docenas de Tortilla de maiz",
    precio: 10,
    stock: 30,
    imagen: require("../productos/image/7.png"),
  },
  {
    id: 8,
    nombre: "Cuatro docenas de Tortilla de maiz",
    precio: 22,
    stock: 17,
    imagen: require("../productos/image/8.png"),
  },
];

const Productos = () => {
  const [busqueda, setBusqueda] = useState("");
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  const productosFiltrados = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      producto.id.toString().includes(busqueda)
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" bg-cover bg-fixed bg-center bg-repeat animate-[scroll_100s_linear_infinite] overflow-y-auto p-5 bg-[#F6EFD5] min-h-screen flex flex-col">
      <div className="flex-grow">
        {showScrollButton ? (
          <button
            className="scroll-button md:hidden block"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            style={{
              display: "block",
              position: "fixed",
              bottom: "20px",
              left: "20px",
              zIndex: "2",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-11 w-11"
              viewBox="0 0 20 20"
              fill="#3C9B35"
            >
              <path
                fillRule="evenodd"
                d="M13.707 9.707a1 1 0 01-1.414 1.414L10 8.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        ) : null}
        <div
          className="display-flex align-center justify-space-between mb-[20px]"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            className="amazon-search"
            style={{ width: "80%" }}
          >
            <input
              className="flex-1 border-none outline-none text-base ml-[10px] bg-transparent"
              type="text"
              placeholder="Buscar productos"
              value={busqueda}
              onChange={handleBusqueda}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {productosFiltrados.map((product) => (
            <div className="product-container" key={product.id}>
              <Link href={`/productos/${product.id}`} legacyBehavior>
                <a>
                  <div className="group">
                    <div
                      className={`${styles["relative"]} ${styles["overflow-hidden"]} ${styles["rounded-lg"]} ${styles["shadow-lg"]} group-hover:shadow-xl transition-shadow duration-500`}
                      style={{ width: "100%", height: "100%" }}
                    >
                      <Image
                        src={product.imagen}
                        alt={product.nombre}
                        layout="responsive"
                        priority
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className={`${styles["p-4"]}`}>
                      <h2
                        className={`${styles["font-semibold"]} ${styles["text-gray-800"]} ${styles["text-lg"]}`}
                        style={{ textAlign: "center" }}
                      >
                        {product.nombre}
                      </h2>
                      <p
                        className={`${styles["text-gray-600"]} ${styles["mt-2"]}`}
                        style={{ textAlign: "center" }}
                      >
                        Precio: ${product.precio}
                      </p>
                      <p
                        className={`${styles["text-gray-600"]} ${styles["mt-2"]}`}
                        style={{ textAlign: "center" }}
                      >
                        Disponibilidad: {product.stock} en stock
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Productos;
