import React from 'react'
import img_wowmen1 from '../assets/Logo:icon/Womenpage.jpg.webp'

const Womensection1 = () => {
  return (
    <div className=''>
        <div className="bg-center bg-no-repeat">
         <img src={img_wowmen1} className="w-full"></img>  
         <div className="absolute  left-0 w-full h-[50px] bg-red-800">
            <p className='text-2xl text-center text-white mt-2'>Women’s Collection</p>
         </div>
        </div>
        
    </div>
  )
}

export default Womensection1