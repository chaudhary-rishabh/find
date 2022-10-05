import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Map from './Map'
import '../Style/Location.css'
import '../Style/common.css'
import { useLocation } from 'react-router-dom'
import hamburger from '../images/hamburger.png'
import { ExploreHeader } from './Explore';

const Location = () => {
  const location = useLocation();
  const [locationState, setLocationState] = useState({image:'', name:''});

  useEffect(() => {
    if (location.state) {
      let _state = location.state;
      setLocationState(_state);
    }
  }, [location]);

  return (
    <div>
      <img src={hamburger} alt='hamburger' className='navslide' />
      <div className='navdiv'><Navbar /></div>
      <ExploreHeader/>
      <div className='mainlocation'>
        <Map />
      </div>

      <div style={{ marginTop: '50vh', marginLeft: '20vw' }}>
        <h2>Search for people interested </h2>
        <div className='cards bajt'>
          <img className='mg' height='100px' width='100px' src={locationState.image} alt='archery' />
          <p>{locationState.name}</p>
        </div>
      </div>
    </div>
  )
};

export default Location