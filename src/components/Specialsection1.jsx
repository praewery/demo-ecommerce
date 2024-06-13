import React from 'react'
import img_sp from '../assets/Logo:icon/Special.jpg'
const Specialsection1 = () => {
  return (
    <div className=''>
        <div className="bg-center bg-no-repeat">
         <img src={img_sp} className="w-full"></img>  
         <div className="absolute  left-0 w-full h-[50px] bg-gray-300">
            <p className='text-2xl text-center text-gray-700 mt-2'>Women’s Collection</p>
         </div>
        </div>
        
    </div>
  )
}

export default Specialsection1