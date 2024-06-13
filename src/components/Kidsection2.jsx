import React from 'react'
import data_product from '../assets/Logo:icon/data'
import Item from '../components/Item' 

const Kidsection2 = () => {
  return (
    <div className=' bg-white px-6 pt-[5rem] mt-5'>
        <div className='flex flex-col items-center mt-10'>
            <p className='text-xl font-normal text-gray-900 dark:text-gray '>12 Product</p> 
                {/* <hr className='w-[70px] h-[6px] rounded-[10px] bg-[#252525]'/> */}

            <div className='grid grid-cols-4 gap-5 mt-[5rem]' title ='item'>
                {data_product.map((item,i)=>{
                    return (
                    <Item 
                    key={i} 
                    id={item.id} 
                    name={item.name} 
                    image={item.image} 
                    newprice={item.price}
                    />)
                })}
                
            </div>
        </div>

    </div>
  )
}

export default Kidsection2