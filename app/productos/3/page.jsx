import Image from "next/image";
import Imagen3 from "../image/3.png";
import Link from "next/link";

const Tres = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#F6EFD5]">
      <div className="productos-container text-justify flex flex-col items-center flex-1">
        <h1 className="text-3xl font-bold mb-4 mt-[30%] lg:mt-[6%]">
          Una docenas de tortilla de harina
        </h1>
        <div className="mx-auto">
          <Image
            src={Imagen3}
            alt="Imagen del Producto"
            priority
            width={500}
            height={64}
            placeholder="blur"
            className="object-contain mb-4"
          />
        </div>
        <div className="lg:px-[1%] lg:ml-[15%] lg:mr-[15%]">
          <dl className="lg:grid-cols-2 lg:gap-8">
            <dl className="text-base text-gray-500">
              Una docena de tortillas de harina es un paquete ideal para
              aquellos que buscan una opción práctica y deliciosa para sus
              comidas diarias. Este paquete contiene 12 tortillas de harina,
              elaboradas con los mejores ingredientes para garantizar su calidad
              y sabor excepcional. Las tortillas de harina son suaves y
              flexibles, lo que las hace perfectas para preparar una gran
              variedad de platillos, desde burritos y quesadillas hasta wraps y
              fajitas. Además, son muy fáciles de almacenar, ya que pueden
              congelarse para su uso posterior. Cada tortilla de harina es
              cuidadosamente elaborada para garantizar su autenticidad y sabor
              excepcional. La masa se amasa a mano y se cuece en un comal
              caliente para crear una textura suave y esponjosa, con un sabor
              delicioso que complementa cualquier relleno. Este paquete de una
              docena de tortillas de harina es perfecto para una cena rápida y
              fácil en casa, para llevar al trabajo o para disfrutar en
              cualquier ocasión en la que quieras un platillo tradicional de la
              cocina latinoamericana.
            </dl>
          </dl>
        </div>
        <div className="fixed bottom-4 left-4">
          <Link href="/productos" legacyBehavior>
            <a className="flex items-center justify-center w-12 h-12 bg-[#3C9B35] text-white rounded-full">
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

export default Tres;
