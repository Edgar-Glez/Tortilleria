import Image from 'next/image';
import Imagen0 from '../image/0.png';
import Link from 'next/link';

const Cero = () => {
  return (
    <div className="text-center flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Tortilla de maiz a la docena</h1>
      <div className="mx-auto">
        <Image src={Imagen0} alt="Imagen del Producto" priority width={500} height={64} className="object-contain mb-4" />
      </div>
      <p className="text-base text-gray-500">La tortilla de maíz es un alimento básico en la gastronomía de muchos países de América Latina y otros lugares del mundo. Esta deliciosa tortilla es una fina masa hecha con harina de maíz y agua, que se cuece en una plancha o comal caliente hasta que esté dorada y crujiente por fuera y suave y tierna por dentro.
      Esta variedad de tortilla se presenta en docenas, lo que la convierte en una excelente opción para compartir en reuniones familiares o con amigos. La tortilla de maíz a la docena es perfecta para preparar tacos, quesadillas, enchiladas y una gran variedad de platillos típicos de la cocina mexicana y latinoamericana. Además, es una opción económica y fácil de almacenar, ya que se puede congelar y consumir en cualquier momento.</p>
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
  );
};

export default Cero;