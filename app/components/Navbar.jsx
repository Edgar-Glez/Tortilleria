import Link from 'next/link'
import React from 'react'
import Logo from '../assets/logo.jpg'
import Image from 'next/image'
const rutas =[
    {
    ruta: "/",
    label: "Tortilleria Valle Verde"
    },
    {
        ruta: "/nuestra-historia",
        label: "Nuestra Historia"
    },
    {
        ruta: "/contactanos",
        label: "Contactanos!"
    },
]

const Navbar = () => {
  
  return (
    
    <nav className=' z-20 sticky top-0 font-bold bg-[#3C9B35] text-white text-xl pt-4 align-middle text-center min-w-[100%] '>
          <ul className='flex gap-6 sticky'>
          <li> <Image className='pl-2 pb-2 sticky' src={Logo} alt="Logo" width={50} height={50} /> </li>
        {rutas.map(({ruta,label})=>(
            <li key={ruta}>
                <Link href={ruta} className='text-2xl align-bottom sticky'>{label}</Link>
            </li>
        ))}
          </ul>

        </nav>
        
  )
}

export default Navbar