import Image from 'next/image'
import React from 'react'

import { object } from 'prop-types'
import Tortilla from '../assets/tortilla.jpg'

import LogoFull from '../assets/logo.png'
import Informacion from './parte2'


const Inicio = () => {
  return (
    <div className='flez flex-col flex-1'>
       <div className='w-[100%] z-0 h-[50%] justify-center   bg-center absolute' >
       <Image
          className='w-full h-full object-cover brightness-50'
          src={Tortilla}       
          alt='Imagen tortilla'
          style={{width: '100%', height: '190%', objectFit: 'cover', intrinsic: 'true'}}
        />
          <div className='bottom-0 left-0 z-10 relative'><Informacion/></div>
        </div>
        <div className='pt-[8%]'>
        <Image className='z-10 relative' src={LogoFull} alt='Logo Empresa' style={{width: '45%'}}/>
        </div>
        
      </div>
    
  )
}

export default Inicio