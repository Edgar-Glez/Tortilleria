import Image from "next/image";
import Imagen4 from "../image/4.png";
import Link from "next/link";
import styles from "../../../styles/globals.css";

const Cuarto = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#F6EFD5]">
      <div className="productos-container text-center flex flex-col items-center flex-1">
        <h1 className="text-3xl font-bold mb-4">
          Dos docenas de tortillas de harina
        </h1>
        <div className="mx-auto">
          <Image
            src={Imagen4}
            alt="Imagen del Producto"
            priority
            width={500}
            height={64}
            className="object-contain mb-4"
          />
        </div>
        <p className="text-base text-gray-500">
          Dos docenas de tortillas de harina es un paquete perfecto para
          aquellos que buscan una opción conveniente y deliciosa para satisfacer
          sus antojos de comida mexicana. Este paquete contiene 24 tortillas de
          harina, elaboradas con los mejores ingredientes para garantizar su
          calidad y autenticidad.
        </p>
        <p className="text-base text-gray-500">
          Las tortillas de harina son suaves, esponjosas y flexibles, lo que las
          hace perfectas para preparar una gran variedad de platillos, desde
          burritos y quesadillas hasta tacos y fajitas. Además, son muy fáciles
          de almacenar, ya que pueden congelarse para su uso posterior.
        </p>
        <p className="text-base text-gray-500">
          Cada tortilla de harina es elaborada cuidadosamente para garantizar su
          autenticidad y sabor excepcional. La masa se amasa a mano y se cuece
          en un comal caliente para crear una textura suave y esponjosa, con un
          sabor delicioso que complementa cualquier relleno.
        </p>
        <p className="text-base text-gray-500">
          Este paquete de dos docenas de tortillas de harina es perfecto para
          reuniones y fiestas en casa, para llevar al trabajo o simplemente para
          tener en tu hogar como opción conveniente y rápida para tus comidas
          diarias.
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

export default Cuarto;
