import React, { useState } from 'react';
import Navbar from './Navbar';
import '../Style/find.css';
import '../Style/common.css';
import { Link } from 'react-router-dom';

import hamburger from '../images/hamburger.png'
import { ExploreHeader } from './Explore';

//find image import
import findimg from '../Image/findImg.png'
import manfinding from '../Image/manfinding.png'
import boredgirl from '../Image/boredgirl.png'
import tiredman from '../Image/tiredman.jpg'
import manhiding from '../Image/manhiding.png'
import findheadimg3 from '../Image/findheadimg3.jpg'
import findheadimg2 from '../Image/findheadimg2.png'
import football from '../Image/football.png'
import basketball from '../Image/basketball.png'
import cricketball from '../Image/cricketball.png'
import tennisball from '../Image/tennisball.png'
import pubg from '../Image/pubg.png'
import bullet from '../Image/bullet.png'


// import manfinding from '../images/manfinding.png'

const Find = () => {
  return (
    <div>
      <img src={hamburger} alt='hamburger' className='navslide' />
      <div className='navdiv'><Navbar /></div>
      <ExploreHeader />
      <div className='mainfind'>
        <FindHeader />
          <h2 className='findtitle'>Sportsalize with people</h2>
        <div style={{ padding: '0px', margin: '0px', marginTop: '1%' }} className='dajt'>
          <div className='bajt'>
            <img width={'90%'} src={manfinding} alt='findman' />
            <h1>Have same boring life</h1><br/>
            <h2>Search for people|location</h2>
            <h2>Get friends of your interests  </h2>
            <h2>Get to know more people </h2>
          </div>
          <div className='backgroundfind'>
            <h2 style={{ color: 'rgb(56, 80, 234)', textAlign:'center', margin  :'1%'}}>Getting board! Working alone! Stressed out! </h2>
            <h1 style={{ color: 'rgb(56, 80, 234)', textAlign:'center'}}>Play with people of same interest </h1>
            <h1 style={{ color: 'rgb(56, 80, 234)', textAlign:'center'}}>Just take a break</h1>
          </div>
          <img src={manhiding} alt='findman' className='manhiding' />
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
      <img height={'60em'} width={'140em'} src={findheadimg3} alt="playing"/>
      {/* <img height={'60em'} width={'140em'} src={findheadimg2} alt="playing"/> */}
      <img className='footballanimation' height={'30em'} width={'50em'} src={football} alt="playing"/>
      <img className='cricketanimation' height={'20em'} width={'30em'} src={cricketball} alt="playing"/>
      <img className='tennisanimation' height={'20em'} width={'30em'} src={tennisball} alt="playing"/>
      <img className='basketballanimation' height={'30em'} width={'50em'} src={basketball} alt="playing"/>
      <img className='pubg' height={'70em'} width={'90em'} src={pubg} alt="playing"/>
      <img className='bullet' height={'5em'} width={'30em'} src={bullet} alt="playing"/>
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
