import React,{ useState } from 'react'
import '../components/Navbar.css';
// ---img---
import  Logo from '../../src/assets/Logo:icon/Logo.png'
import Cart from '../../src/assets/Logo:icon/cart.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");



  return (
    <div className='flex h-11 shadow-md '>
        <div className='h-24 w-24 p-2 '>
                <img src={Logo}/>
        </div>

        <div className='w-5/6 flex justify-center h-24 w-24 p-2 mx-auto'>
            <ul className='flex item-center gap-x-12 h-24 w-24 p-1 mx-auto' title='nav-menu'>
                <li onClick={() => setMenu("shop")} className='relative flex flex-col items-center'>
                <Link to='/'>Shop</Link>
                {menu === "shop" && <hr className='border-none w-4/5 h-1 mt-0.1 rounded bg-red-600' />}
                </li>
                <li onClick={() => setMenu("mens")} className='relative flex flex-col items-center'>
                <Link to='/mens'>Men</Link>
                {menu === "mens" && <hr className='border-none w-4/5 h-1 -mt-0.1 rounded bg-red-600' />}
                </li>
                <li onClick={() => setMenu("womens")} className='relative flex flex-col items-center'>
                <Link to='/womens'>Women</Link>
                {menu === "womens" && <hr className='border-none w-4/5 h-1 -mt-0.1 rounded bg-red-600' />}
                </li>
                <li onClick={() => setMenu("kids")} className='relative flex flex-col items-center'>
                <Link to='/kids'>Kids</Link>
                {menu === "kids" && <hr className='border-none w-4/5 h-1 -mt-0.1 rounded bg-red-600' />}
                </li>
            </ul>
        </div>
        <div className='flex item-end mx-auto p-2' title='cart'>
                <img src={Cart}></img>
        </div>

        
        
        
        

        
        

    </div>
  )
}

export default Navbar