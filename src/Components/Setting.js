import React, { useState } from 'react'
import Navbar from './Navbar'
import '../Style/Setting.css'
import '../Style/common.css'
import Switch from 'react-switch'

import hamburger from '../images/hamburger.png'
import { ExploreHeader } from './Explore';

const Setting = () => {
  const [theme, setTheme] = useState("dark");
  const [checked, setChecked] = useState(false);
  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };
  return (
    <div>
      <img src={hamburger} alt='hamburger' className='navslide' />
      <div className='navdiv'><Navbar /></div>
      <ExploreHeader />
      <div className='settingmain' style={{ body: { color: 'black' } }}>
        <p>Change Theme</p>
        <Switch onChange={handleChange} checked={checked} />
      </div>
    </div>
  )
};

export default Setting