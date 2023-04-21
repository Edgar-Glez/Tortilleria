import Image from 'next/image'
import React from 'react'
import Background from '../assets/Background.png'
import '../../styles/globals.css';
import CornImage from '../assets/granos.jpeg'
import Local from '../assets/Local.jpg'
import MaquinaTortilla from '../assets/MaquinaTortillas.gif'
import Tortilla from '../assets/tortillaV.png'
import Footer from '../footer/footer';
import Celorio from '../assets/celorio.jpeg'

const Informacion = () => {
  return (
    <div className='informacion-container bg-[#F6EFD5] '>

        <h1 className='pt-9 bold text-center info-titulo'>¡La más alta <span className='info-span'>calidad!</span> </h1>
       
        <div  className='px-[10%] pb-28  pt-24 flex md:flex-row flex-col gap-4 pl-[20%]'>

        <Image src={Local} alt='Local' className='md:w-[700px] w-full h-[250px] rounded-[32px] object-cover'/>
           <div className='w-full flex justify-between items-center'>
                <div className='flex-1 md:ml-[62px] flex flex-col max-w-[650px]'>
                    <h4 className='font-bold lg:text[90px] text-[60px] text-[#3C9B35]'>Ven y conócenos</h4>
                    <p className='font-normal text-[30px]'>Calle Ámbar #130 Col. Valle Verde.</p>
                    <p className='text-[20px]'>(Sobre la calle de las segundas, a un costado de Prim. Anexa a la normal)</p>
                </div>
            </div>
            
        </div>
        <div  className='px-[10%] pb-28 flex md:flex-row flex-col gap-4 pl-[20%]'>

            <Image src={CornImage} alt='Maiz Blanco' className='md:w-[700px] w-full h-[250px] rounded-[32px] object-cover'/>
            <div className='w-full flex justify-between items-center'>
                <div className='flex-1 md:ml-[62px] flex flex-col max-w-[650px]'>
                    <h4 className='font-bold lg:text[90px] text-[60px] text-[#3C9B35]'>100% Maíz</h4>
                    <p className='font-normal text-[30px]'>Garantizamos calidad premium en el proceso de nixtamalización</p>
                </div>
            </div>
            
        </div>

        
         <div  className='px-[10%] pb-28 flex md:flex-row flex-col gap-4 pl-[20%]'>

            <Image src={Celorio} alt='Celorio' className='md:w-[700px] w-full h-[250px] rounded-[32px] object-cover'/>
            <div className='w-full flex justify-between items-center'>
                <div className='flex-1 md:ml-[62px] flex flex-col max-w-[650px]'>
                    <h4 className='font-bold lg:text[90px] text-[60px] text-[#3C9B35]'>Celorio</h4>
                    <p className='font-normal text-[30px]'> Las mejores y originales maquinas tortilladoras</p>
                </div>
            </div>
            
        </div>
        <div className='pt-[30%] mx-[6%] relative mb-[5%]' >
            <Image src={MaquinaTortilla} alt="Tortillas gif" className='absolute top-0 left-0 w-full h-[100%] object-cover rounded-3xl'/>
        </div>
        <div> .</div>

        <Footer className='mt-auto'/>
         </div>
  )
}

export default Informacion