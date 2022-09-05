import React, { useState } from 'react'
import Navbar from './Navbar'
import '../Style/explore.css'
import profileimg from '../images/profileimg.jpg'
import profileimgt from '../images/Rugby.png'
import Items from './Items'
import Carousel  from 'react-elastic-carousel'
import { templateSettings } from 'lodash'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 2000, itemsToShow: 2 }
]

const Explore = () => {
  const d = new Date();
  var uploadDate = d.toDateString();
  var explorePosts = [
    { id:1, post: { profileimg } , time:{uploadDate}, name:'Rishabh', sport:'Chess'},
    { id:2, post: { profileimg } , time:{uploadDate}, name:'Rishabh', sport:'Chess'},
    { id:3, post: { profileimg } , time:{uploadDate}, name:'Rishabh', sport:'Chess'},
    { id:4, post: { profileimg } , time:{uploadDate}, name:'Rishabh', sport:'Chess'},
    { id:5, post: { profileimg } , time:{uploadDate}, name:'Rishabh', sport:'Chess'},
    { id:6, post: { profileimg } , time:{uploadDate}, name:'Rishabh', sport:'Chess'},
    { id:7, post: { profileimg } , time:{uploadDate}, name:'Rishabh', sport:'Chess'},
    { id:8, post: { profileimg } , time:{uploadDate}, name:'Rishabh', sport:'Chess'},
    { id:9, post: { profileimg } , time:{uploadDate}, name:'Rishabh', sport:'Chess'},
    { id:10, post: { profileimg } , time:{uploadDate}, name:'Rishabh', sport:'Chess'},
    { id:11, post: { profileimg } , time:{uploadDate}, name:'Rishabh', sport:'Chess'}
  ]
  return (
    <div>
      <div className='navdiv'><Navbar/></div>
      <div className='mainexplore'>
        <Carousel breakPoints={breakPoints}>
          {/* {explorePosts.map((posts) => {
            return <Slideshow key={posts.id} name={posts.name} time={posts.time} post={posts.post} sport={posts.sport} />
          })} */}
          <Slideshow time={uploadDate} sport="Chess" />
          <Slideshow time={uploadDate} sport="Chess"/>
          <Slideshow time={uploadDate} sport="Chess"/>
          <Slideshow time={ uploadDate  } sport="Chess"/>
        </Carousel>
      </div>
    </div>
  )
}

const Slideshow = (props) => {
  return (
    <div className='postContainer'>
      {props.key}
      <div className='back'>
        <img className='profileRadius' height={'80px'} width={'80px'} src={profileimgt} alt="profileimg" />
        <div>
          <h3>Rishabh Chaudhary</h3>
          <h3>{props.time}</h3>
          <h3>{props.sport}</h3>
        </div>
          <h1 className='likebtn'>💙</h1>
      </div>
        {/* <img width={'1500px'} height={'650px'} src={profileimg} alt='profileimg'></img> */}
    </div>    
  );
};

export default Explore
