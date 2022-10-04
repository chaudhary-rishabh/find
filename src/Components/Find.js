import React, { useState } from 'react';
import Navbar from './Navbar';
import '../Style/find.css';
import '../Style/common.css';
import { Link } from 'react-router-dom';



import hamburger from '../images/hamburger.png'
import { ExploreHeader } from './Explore';

const Find = () => {
  return (
    <div>
      <img src={hamburger} alt='hamburger' className='navslide' />
      <div className='navdiv'><Navbar /></div>
      <ExploreHeader />
      <div className='mainfind'>
        <FindHeader />
        <div className='subcategoryMain dajt'>
          
        </div>
      </div>
    </div>   
  )
};

export const FindHeader = () => {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${search}`);
  };
  return (
    <div className='findhead'>
      <div className='heading' style={{ marginLeft: '10px' }}>
        <form onSubmit={handleSubmit}>
          <label style={{ color: 'black', marginRight: '5px', fontSize: '0.7em' }} htmlFor='ssearch'>Search:</label>
          <input onChange={handleSearch} type='search' value={search} id='ssearch' placeholder='enter name of sport/people' className='search' />
          <button type='submit' className='submit' style={{ cursor: 'pointer' }} value=''>🔍</button>
        </form>
      </div>
      <div>
        <Dropdown category={'Category🠻'} sports={'Sports'} esports={'Esports'} adventure={'Adventure'} professionalSports={'Professional Sports'} competitiveEsports={'Competitive Esports'}/>
      </div>
    </div>
  )
};

const Dropdown = (props) => {
  return (
    <div className="dropdown">
      <button className="dropbtn" id='category'>{props.category}</button>
      <div className="dropdown-content">
        <Link to='/find/sports'>{props.sports}</Link>
        <Link to='/find/esports'>{props.esports}</Link>
        <Link to='/find/adventure'>{props.adventure}</Link>
        <Link to='/find/competitiveesports'>{props.competitiveEsports}</Link>
        <Link to='/find/professionalsports'>{props.professionalSports}</Link>
      </div>
    </div>
  )
};
export default Find
