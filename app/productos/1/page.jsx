import Image from "next/image";
import Imagen1 from "../image/1.png";
import Link from "next/link";
import styles from "../../../styles/globals.css";

const Uno = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#F6EFD5]">
      <div className="productos-container text-justify flex flex-col items-center flex-1">
        <h1 className="text-3xl font-bold mb-4 mt-[30%] lg:mt-[5%]">
          Dos docenas de Tortilla de maiz
        </h1>
        <div className="mx-auto">
          <Image
            src={Imagen1}
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
              Dos docenas de tortilla de maíz es un paquete generoso de uno de
              los alimentos básicos más queridos de la cocina latinoamericana.
              Estas tortillas están hechas con harina de maíz de la más alta
              calidad, mezclada con agua y amasada a mano para lograr una
              textura perfecta y un sabor auténtico. Con las dos docenas de
              tortilla de maíz, puedes preparar una gran variedad de platillos
              tradicionales de la cocina latinoamericana, como tacos,
              enchiladas, quesadillas, tostadas, sopes, chilaquiles y muchas
              otras opciones deliciosas. Además, estas tortillas son muy fáciles
              de almacenar, ya que pueden ser congeladas para su uso posterior.
              Las tortillas son luego cocidas a la perfección en un comal
              caliente, creando una superficie crujiente y dorada en el exterior
              y una textura suave y tierna en el interior. Este paquete de dos
              docenas de tortillas es perfecto para cualquier ocasión, ya sea
              una reunión familiar, una fiesta con amigos o simplemente para
              disfrutarlas en casa.
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

export default Uno;
