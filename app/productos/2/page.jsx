import Image from "next/image";
import Imagen2 from "../image/2.png";
import Link from "next/link";
import styles from "../../../styles/globals.css";

const Dos = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#F6EFD5]">
      <div className="productos-container text-justify flex flex-col items-center flex-1">
        <h1 className="text-3xl font-bold mb-4 mt-[30%] lg:mt-[6%]">
          Diez docenas de Tortillas de maiz
        </h1>
        <div className="mx-auto">
          <Image
            src={Imagen2}
            alt="Imagen del Producto"
            priority
            width={500}
            height={64}
            className="object-contain mb-4"
          />
        </div>
        <div className="lg:px-[1%] lg:ml-[15%] lg:mr-[15%]">
          <dl className="lg:grid-cols-2 lg:gap-8">
            <dl className="text-base text-gray-500">
              Diez docenas de tortillas de maíz es un paquete ideal para
              aquellos que buscan una opción económica y práctica para
              abastecerse de uno de los alimentos más esenciales de la cocina
              latinoamericana. Este paquete contiene 120 tortillas de maíz,
              elaboradas con ingredientes naturales de alta calidad, para
              garantizar su autenticidad y sabor excepcional. Las tortillas son
              cuidadosamente elaboradas por expertos, quienes amasan y cuecen la
              masa a la perfección para crear una textura suave y tierna, con un
              sabor auténtico que te transportará a las calles de México y otros
              países latinoamericanos. Este paquete de diez docenas es ideal
              para grandes reuniones, eventos familiares, negocios de alimentos
              y restaurantes. Con las diez docenas de tortillas de maíz, puedes
              preparar una gran variedad de platillos tradicionales de la cocina
              latinoamericana, desde tacos y enchiladas hasta sopes, chilaquiles
              y mucho más. Además, las tortillas son fáciles de almacenar, ya
              que pueden congelarse para su uso posterior.
            </dl>
          </dl>
        </div>
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

export default Dos;
