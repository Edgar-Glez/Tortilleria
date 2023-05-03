import Image from "next/image";
import Imagen8 from "../image/8.png";
import Link from "next/link";
import styles from "../../../styles/globals.css";

const Octavo = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#F6EFD5]">
      <div className="productos-container text-center flex flex-col items-center flex-1">
        <h1 className="text-3xl font-bold mb-4">
          Cuatro docenas de Tortilla de maiz
        </h1>
        <div className="mx-auto">
          <Image
            src={Imagen8}
            alt="Imagen del Producto"
            priority
            width={500}
            height={64}
            className="object-contain mb-4"
          />
        </div>
        <p className="text-base text-gray-500">
          Cuatro docenas de tortilla de maíz es un paquete ideal para aquellos
          que aman la cocina mexicana y buscan una opción práctica y deliciosa
          para preparar sus platillos favoritos. Este paquete contiene 48
          tortillas de maíz frescas y auténticas, elaboradas con los mejores
          ingredientes y cuidadosamente seleccionadas para garantizar su
          calidad.
        </p>
        <p className="text-base text-gray-500">
          Las tortillas de maíz son un elemento fundamental de la gastronomía
          mexicana y son perfectas para preparar una gran variedad de platillos,
          desde tacos y quesadillas hasta tostadas y enchiladas. Cada tortilla
          es suave, flexible y llena de sabor, lo que la hace perfecta para
          cualquier relleno que desees agregar.
        </p>
        <p className="text-base text-gray-500">
          Cada tortilla de maíz en este paquete es elaborada con una receta
          tradicional, utilizando solo maíz molido y agua, lo que las hace
          naturales y saludables. Son cocidas en un comal caliente para crear
          una textura suave y ligeramente tostada, lo que le agrega un sabor
          excepcional a tus platillos.
        </p>
        <p className="text-base text-gray-500">
          Este paquete de cuatro docenas de tortilla de maíz es ideal para
          hogares grandes, fiestas, reuniones familiares y cualquier evento en
          el que se desee servir platillos mexicanos auténticos y deliciosos.
          Con este paquete, siempre tendrás tortillas de maíz frescas y listas
          para usar en cualquier platillo que desees preparar.
        </p>
        <div className="fixed bottom-4 left-4">
          <Link href="/productos" legacyBehavior>
            <a className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Octavo;
