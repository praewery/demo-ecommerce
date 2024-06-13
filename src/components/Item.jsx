import React from 'react'


const Item = (props) => {
  return (
    <div className='w-350px' title='item'>
        <img src={props.image} alt={props.name}/>
        <p className='text-sm font-antialiased mt-3 ml-4'>{props.name}</p>
        <div className='flex gap-5 mt-2' title='item-prices'>
          <p className='text-sm font-antialiased'>{props.price}</p>
        </div>
        

    </div>
  )
}

export default Item