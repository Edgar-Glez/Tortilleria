'use client'
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
import { Card } from '@nextui-org/react';

const Informacion = () => {
  return (
    <div className='informacion-container bg-[#F6EFD5] '>

    <h1 className='pt-9 bold text-center info-titulo text-2xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl leading-tight md:leading-snug lg:leading-normal xl:leading-loose'>¡La más alta <span className='info-span'>calidad!</span></h1>

    <div className='px-[10%] pb-25 pt-24 flex md:flex-row flex-col gap-4 pl-[20%]'>
        <Card style={{
            backgroundImage: `url(${Local.src})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            width: '100%',
            height: '300px',
            borderRadius: '32px',
            maxHeight:'1000px',
            maxWidth: '1000px',
        }}>
            <div className='w-full flex flex-col items-center justify-center'>
            <div className='flex-1 md:ml-[62px] max-w-[650px]'>
                <h4 className='font-bold lg:text[90px] text-[60px] text-[#3C9B35]' style={{ textShadow: '0 0 10px #fff' }}>Ven y conócenos</h4>
                <p className='font-normal text-[30px] text-[#f0ffee]' style={{ textShadow: '0 0 10px #fff' }}>Calle Ámbar #130 Col. Valle Verde.</p>
                <p className='text-[20px] text-[#f0ffee]' style={{ textShadow: '0 0 10px #fff' }}>(Sobre la calle de las segundas, a un costado de Prim. Anexa a la normal)</p>
            </div>
            </div>
        </Card>
    </div>

    <div className='px-[10%] pb-28 pt-24 flex md:flex-row flex-col gap-4 pl-[20%]'>
       <Card style={{
            backgroundImage: `url(${CornImage.src})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            width: '100%',
            height: '300px',
            borderRadius: '32px',
            maxHeight:'1000px',
            maxWidth: '1000px',
       }}>
          <div className='w-full flex flex-col items-center'>
            <div className='flex-1 md:ml-[62px] flex flex-col max-w-[650px]'>
              <h4 className='font-bold lg:text[90px] text-[60px] text-[#3C9B35]' style={{ textShadow: '0 0 10px #fff' }}>100% Maíz</h4>
              <p className='font-normal text-[30px]' style={{ textShadow: '0 0 10px #fff' }}>Garantizamos calidad premium en el proceso de nixtamalización</p>
            </div>
          </div>
        </Card>
    </div>

        
    <div className='px-[10%] pb-28 pt-23 flex md:flex-row flex-col gap-4 pl-[20%]'>
        <Card style={{
            backgroundImage: `url(${Celorio.src})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            width: '100%',
            height: '300px',
            borderRadius: '32px',
            maxHeight:'1000px',
            maxWidth: '1000px',
        }}>
        <div className='w-full flex flex-col items-center'>
        <div className='flex-1 md:ml-[62px] flex flex-col max-w-[650px]'>
            <h4 className='font-bold lg:text-[90px] text-[60px] text-[#3C9B35]' style={{ textShadow: '0 0 10px #fff' }}>Celorio</h4>
            <p className='font-normal text-[30px]' style={{ textShadow: '0 0 10px #fff' }}>Las mejores y originales maquinas tortilladoras</p>
        </div>
        </div>

        </Card>
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