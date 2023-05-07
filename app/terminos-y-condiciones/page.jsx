"use client";
import React, { useEffect, useState } from "react";
import Footer from "../footer/footer2";

const Terminos = () => {
  const [minHeight, setMinHeight] = useState("100vh");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setMinHeight("350vh");
      } else {
        setMinHeight("180vh");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className="contactanos-container bg-[#F6EFD5]"
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
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-36 lg:px-8">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Términos y Condiciones de Tortillería Valle Verde
            </h2>
            <p className="mb-10 text-justify">
              Bienvenido a la Tortillería Valle Verde. Por favor, lee
              cuidadosamente los siguientes términos y condiciones que rigen el
              uso de nuestro sitio web y los servicios que ofrecemos.
            </p>
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <h3 className="text-lg font-bold mb-2">Uso del sitio web</h3>
              <p className="mb-4 text-justify">
                Al utilizar nuestro sitio web y nuestros productos y servicios,
                aceptas estos términos y condiciones en su totalidad. Si tienes
                alguna pregunta o inquietud, por favor, contáctanos en (646) 261
                2698.
              </p>
              <h3 className="text-lg font-bold mb-2">Propiedad intelectual</h3>
              <p className="mb-4 text-justify">
                El contenido del sitio web, incluyendo pero no limitado a, el
                texto, las imágenes, los gráficos, el código fuente y el
                software, son propiedad exclusiva de Tortillería Valle Verde.
                Queda prohibida cualquier reproducción, distribución o uso no
                autorizado del contenido del sitio web.
              </p>
              <h3 className="text-lg font-bold mb-2">Servicios ofrecidos</h3>
              <p className="mb-4 text-justify">
                Tortillería Valle Verde se compromete a ofrecer productos y
                servicios de alta calidad. Nos reservamos el derecho de
                modificar o discontinuar cualquier producto o servicio en
                cualquier momento y sin previo aviso.
              </p>
              <h3 className="text-lg font-bold mb-2">Precios y pago</h3>
              <p className="mb-4 text-justify">
                Los precios de nuestros productos y servicios están sujetos a
                cambios sin previo aviso. Todos los pagos deben realizarse en el
                momento de la compra. Aceptamos pagos en efectivo y tarjetas de
                crédito/débito.
              </p>
              <h3 className="text-lg font-bold mb-2">
                Política de envío y entrega
              </h3>
              <p className="mb-4 text-justify">
                Nos esforzamos por entregar nuestros productos en el menor
                tiempo posible. Sin embargo, nos reservamos el derecho de
                retrasar o cancelar cualquier envío por cualquier motivo. El
                costo del envío será determinado al momento de la compra y se
                agregará al precio final del producto.
              </p>
              <h3 className="text-lg font-bold mb-2">
                Política de devoluciones
              </h3>
              <p className="mb-4 text-justify">
                No se aceptan devoluciones de productos comprados en Tortillería
                Valle Verde, a menos que el producto presente algún defecto o
                daño.
              </p>
              <h3 className="text-lg font-bold mb-2">
                Protección de datos personales
              </h3>
              <p className="mb-4 text-justify">
                En Tortillería Valle Verde, nos comprometemos a proteger tus
                datos personales. Al utilizar nuestro sitio web, aceptas nuestra
                política de privacidad.
              </p>
              <h3 className="text-lg font-bold mb-2">
                Limitación de responsabilidad
              </h3>
              <p className="mb-4 text-justify">
                En ningún caso Tortillería Valle Verde será responsable por
                daños directos, indirectos, accidentales, especiales o
                consecuentes que resulten del uso o la imposibilidad de usar
                nuestro sitio web o nuestros productos y servicios.
              </p>
              <h3 className="text-lg font-bold mb-2">
                Ley aplicable y jurisdicción
              </h3>
              <p className="mb-4 text-justify">
                Estos términos y condiciones se rigen por las leyes de México.
                Cualquier disputa relacionada con estos términos y condiciones
                será resuelta en los tribunales competentes de México.
              </p>
              <p className="mt-10"></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terminos;
