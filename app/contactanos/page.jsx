import React from 'react'
import Footer from '../footer/footer'

const contactanos = () => {
  return (
    
      <div className='contactanos-container bg-[#F6EFD5] md:min-w-[1225px]'>
      <div className='justify-center pt-24 flex sd:flex-row flex-col gap-4 my-class px-[10%]'>
        <div className='pr-14  '>
           <h1 className='text-5xl'>¡Contáctanos!</h1>
          
           <h2 className='text-2xl pt-6 font-bold'>Pedidos a <span className='text-[#1BD741] text-stroke-black text-stroke-[5px]'>WhatsApp</span> </h2>
           <h2 className='text-2xl'>(646) 261 2698 </h2>
           <h2 className='text-2xl pt-6 font-bold'>Nos encontramos en:  </h2>
           <h2 className='text-2xl'>Calle Ámbar #130 Col. Valle Verde. </h2>
           <h2 className='text-2xl'>(Sobre la calle de las segundas, a un  </h2>
           <h2 className='text-2xl'>costado de Prim. Anexa a la normal) </h2>
           
           
  
           
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1093.006292570032!2d-116.60701177550378!3d31.88303949185808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d88d27f547cdfd%3A0x23b78116615bd733!2sTortiller%C3%ADa%20Valle%20Verde!5e0!3m2!1sen!2smx!4v1681682116959!5m2!1sen!2smx" width="50%" height="300" style={{border: '0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
       </div>
      <Footer/>
      </div>
    
  )
}

export default contactanos