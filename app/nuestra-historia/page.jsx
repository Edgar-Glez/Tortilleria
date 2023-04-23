import React from 'react'
import Footer from '../footer/footer'
import Logo from '../assets/logoCompleto.jpg'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className='contactanos-container bg-[#F6EFD5] md:min-w-[1225px]'>
    <div className='justify-center pt-24 flex sd:flex-row flex-col gap-4 my-class  items-center'>
    <Image src={Logo} alt='Logo Empresa' className='h-[500px] w-[500px] rounded-lg'/>
       <div className='pr-14 max-w-[700px]'>
         <h1 className='text-5xl text-[#3C9B35]'>Nuestra Historia</h1>
         <p className='text-2xl  text-justify overflow-hidden  text-overflow-ellipsis'>Hace 40 años, Don Juan Velazco comenzó la franquicia de las máquinas tortilladoras Celorio, y por su parte, hace 20 años, su esposa Adela Esquivel inauguró la tortillería Real del maíz, la cual fue muy exitosa por 5 años pero cerró debido a problemas de salud. </p>
         <p className='text-2xl  text-justify overflow-hidden  text-overflow-ellipsis'>Desde niños, sus hijos trabajaron en el ámbito tortillero, ya sea, en tortillería, en arreglo mecánico de las maquinas, distrubución del material, entre otros.</p>
         <p className='text-2xl  text-justify overflow-hidden  text-overflow-ellipsis'>Ahora su hijo menor, con apoyo de su pareja, continuan el legado de sus padres y con el objetivo de honrar la memoria de ámbos, emprenden esta tortillería con la motivación de lograr la mejor tortilla de maíz de Ensenada</p>
      </div>
     </div>
      <Footer/>
    </div>
  )
}

export default AboutPage