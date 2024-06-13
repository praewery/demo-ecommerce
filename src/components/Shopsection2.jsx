import React from 'react'
import { Link } from 'react-router-dom';
import img2 from '../../src/assets/Logo:icon/shoppage_s2.jpg.webp'
import img3 from '../../src/assets/Logo:icon/shoppage_s3.jpg.webp'
import img4 from '../../src/assets/Logo:icon/shoppage_s4.jpg.webp'
import img5 from '../../src/assets/Logo:icon/shoppage_s5.jpg.webp'


const Shoppagesection2 = () => {
  return (  
    <div className=' bg-white px-5 pt-[5rem]'>
      <div className='flex flex-col items-center h-64'>
        <p class="text-4xl font-saira text-gray-900 dark:text-gray">SHOP BY CATEGORY</p>
        <div className='grid grid-cols-4 gap-4 mt-[5rem]'>
          <Link to="/news"><img src={img2}/></Link>
          <Link to="/womens"><img src={img3}/></Link>
          <Link to="/mens"><img src={img4}/></Link>
          <Link to="/specials"><img src={img5}/></Link>
        
        </div>
      </div> 
    </div>
      
  )
}

export default Shoppagesection2