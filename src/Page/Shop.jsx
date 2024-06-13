import React from 'react'
import { Link } from 'react-router-dom'
import Shopsection1 from '../components/Shopsection1'
import Shopsection2 from '../components/Shopsection2'
import Shopsection3 from '../components/Shopsection3'
import Footer from '../components/Footer'

const Shop = () => {
  return (
    <div>
      <Shopsection1/>
      <Shopsection2/>
      <Shopsection3/>
      <Footer/>
    </div>
  )
}

export default Shop