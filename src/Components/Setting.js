import React from 'react'
import Navbar from './Navbar'
import Map from './Map'
import '../Style/setting.css'

const Setting = () => {
  return (
      <div>
        <div className='navdiv'><Navbar/></div>
        <div className='mainsetting'>
            <Map />
        </div>
    </div>
  )
}

export default Setting