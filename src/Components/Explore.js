import React, { useState } from 'react'
import Navbar from './Navbar'
import '../Style/explore.css'

import exploredpone from '../images/exploredpone.png'
import exploredptwo from '../images/exploredptwo.png'
import exploredpthree from '../images/exploredpthree.png'
import exploredpfour from '../images/exploredpfour.png'
import exploredpfive from '../images/exploredpfive.png'
import exploredpsix from '../images/exploredpsix.png'
import exploredpseven from '../images/exploredpseven.png'

const Explore = () => {
  const d = new Date();
  var uploadDate = d.toDateString();
  var explorePosts = [
    { id:1, post: exploredpone, time:{uploadDate}, name:'Suzan', sport:'Chess'},
    { id:2, post: exploredptwo, time:{uploadDate}, name:'Princia', sport:'Cricket'},
    { id:3, post:  exploredpthree , time:{uploadDate}, name:'Om', sport:'Football'},
    { id:4, post:  exploredpfour , time:{uploadDate}, name:'Arijeet', sport:'Tracking'},
    { id:5, post:  exploredpfive , time:{uploadDate}, name:'Jiona', sport:'Biker'},
    { id:6, post:  exploredpsix , time:{uploadDate}, name:'Diana', sport:'Cricket'},
    { id:7, post:  exploredpseven , time:{uploadDate}, name:'Pooja', sport:'Running'},
    { id:8, post:  exploredptwo , time:{uploadDate}, name:'Priana', sport:'Singing'},
    { id:9, post:  exploredpone , time:{uploadDate}, name:'Raynia', sport:'Dancing'},
    { id:10, post:  exploredpthree , time:{uploadDate}, name:'Varun', sport:'Gym'},
    { id:11, post:  exploredpfive, time:{uploadDate}, name:'Rohit', sport:'Wrestling'}
  ]
  return (
    <div>
      <div className='navdiv'><Navbar/></div>
      <div className='mainexplore'>
          {explorePosts.map((posts) => {
            return <Slideshow post={posts.post} key={posts.id} name={posts.name} time={uploadDate} sport={posts.sport} />
          })}
      </div>
    </div>
  )
}

const Slideshow = (props) => {
  return (
    <div className='postContainer'>
      {props.key}
      <div className='back'>
        <img className='profileRadius' src={props.post} height={'80px'} width={'80px'} alt="exploreimg" />
        <div>
          <h3>{props.name}</h3>
          <h3>{props.time}</h3>
          <h3>{props.sport}</h3>
        </div>
          <h1 className='likebtn'>💙</h1>
      </div>
    </div>    
  );
};

export default Explore
