import Image from 'next/image';
import Imagen5 from '../image/5.png'
import Link from 'next/link';

const Cinco = () => {
  return (
    <div className="text-center flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Salsa Macha el mijito</h1>
      <div className="mx-auto">
        <Image src={Imagen5} alt="Imagen del Producto" priority width={500} height={64} className="object-contain mb-4" />
      </div>
      <p className="text-base text-gray-500">
      Salsa Macha el mijito es una salsa picante y deliciosa, ideal para aquellos que buscan agregar un poco de sabor y picante a sus comidas. Esta salsa es elaborada con ingredientes naturales y de la más alta calidad, cuidadosamente seleccionados para garantizar su autenticidad y sabor excepcional.
      </p>
      <p className="text-base text-gray-500">
      La salsa Macha el mijito es una combinación de chiles secos, ajo, cebolla, aceite y especias, que juntos crean una mezcla de sabor intenso y picante. Es perfecta para acompañar platillos como tacos, quesadillas, enchiladas o cualquier otra comida que desees agregar un poco de sabor picante.
      </p>
      <p className="text-base text-gray-500">
      Esta salsa es conocida por su versatilidad y su capacidad para mejorar el sabor de cualquier platillo. Es ideal para aquellos que buscan agregar un toque de picante a sus comidas diarias o para aquellos que buscan experimentar con nuevos sabores y platillos.
      </p>
      <p className="text-base text-gray-500">
      La salsa Macha el mijito viene en un envase fácil de usar, lo que la hace ideal para llevarla contigo a cualquier lugar. Además, su sabor auténtico y suave picante son perfectos para aquellos que buscan disfrutar de la cocina mexicana en cualquier momento y lugar.
      </p>
      <div className="fixed bottom-4 left-4">
        <Link href="/productos" legacyBehavior>
          <a className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  )
};

export default Cinco;