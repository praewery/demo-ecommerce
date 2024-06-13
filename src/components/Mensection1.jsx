import React from 'react'
import img_men1 from '../assets/Logo:icon/Menpage_s1.jpg.webp'

const Mensection1 = () => {
  return (
    <div className=''>
        <div className="bg-center bg-no-repeat">
         <img src={img_men1} className="w-full"></img>  
         <div className="absolute  left-0 w-full h-[50px] bg-red-800">
            <p className='text-2xl text-center text-white mt-2'>Men’s Collection</p>
         </div>
        </div>
        
    </div>
  )
}

export default Mensection1