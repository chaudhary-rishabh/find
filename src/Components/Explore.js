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
import cycling2 from '../images/cycling2.jpg'
import judo from '../images/judo.jpg'
import boxing from '../images/boxing.jpg'
import football from '../images/football.jpg'
import travelling from '../images/travelling.jpg'
import surf from '../images/surf.jpg'
import swimming from '../images/swimming.jpg'
import vollyball from '../images/vollyball.jpg'
import girlgym from '../images/gymgirl.jpg'
import swimming3 from '../images/swimming3.jpg'
import icehockey from '../images/icehockey.jpg'

const Explore = () => {
  const d = new Date();
  var uploadDate = d.toDateString();
  var explorePosts = [
    { id:1, postHeadDp: exploredpone, time:{uploadDate}, name:'Suzan', sport:'Chess', post: swimming},
    { id:2, postHeadDp: exploredptwo, time:{uploadDate}, name:'Princia', sport:'Cricket', post: vollyball},
    { id:3, postHeadDp:  exploredpthree , time:{uploadDate}, name:'Om', sport:'Football', post: swimming3},
    { id:4, postHeadDp:  exploredpfour , time:{uploadDate}, name:'Arijeet', sport:'Tracking', post: travelling},
    { id:5, postHeadDp:  exploredpfive , time:{uploadDate}, name:'Jiona', sport:'Biker', post: cycling2},
    { id:6, postHeadDp:  exploredpsix , time:{uploadDate}, name:'Diana', sport:'Cricket', post: girlgym},
    { id:7, postHeadDp:  exploredpseven , time:{uploadDate}, name:'Pooja', sport:'Running', post: judo},
    { id:8, postHeadDp:  exploredptwo , time:{uploadDate}, name:'Priana', sport:'Singing', post: football},
    { id:9, postHeadDp:  exploredpone , time:{uploadDate}, name:'Raynia', sport:'Dancing', post: surf},
    { id:10, postHeadDp:  exploredpthree , time:{uploadDate}, name:'Varun', sport:'Gym', post: boxing},
    { id:11, postHeadDp:  exploredpfive, time:{uploadDate}, name:'Rohit', sport:'Wrestling', post: icehockey}
  ]
  return (
    <div>
      <div className='navdiv'><Navbar/></div>
        <ExploreHeader/>
      <div className='mainexplore'>
        {explorePosts.map((posts) => {
          return <Slideshow postHeadDp={posts.postHeadDp} key={posts.id} post={posts.post} name={posts.name} time={uploadDate} sport={posts.sport} />
        })}
      </div>
    </div>
  )
}

const Slideshow = (props) => {
  var [likebtn, setLikebtn] = useState('🤍');
  var [totalLikes, setTotalLikes] = useState(200);
  function changeLikebtn() {
    if (likebtn === '🤍') {
      setLikebtn('💙');
      setTotalLikes(totalLikes + 1);
    } else {
      setLikebtn('🤍');
      setTotalLikes(totalLikes - 1);
    }
  };

  return (
    <div className='postContainer'>
      {props.key}
      <div className='postHeader'>
        <img className='profileRadius' src={props.postHeadDp} height={'80px'} width={'80px'} alt="exploreimg" />
          <div>
          <h3>{props.name}</h3>
          <h3>{props.time}</h3>
          <h3>{props.sport}</h3>
        </div>
      </div>
      <div className='back'>
        <img src={props.post} alt='post' className='postimg'/>
      </div>
      <div className='postButton'>
        <h2 onClick={changeLikebtn} style={{cursor:'pointer'}}> {likebtn} {totalLikes} </h2>
        {/* <h2> 💙 </h2> */}
        <h2 style={{cursor:'pointer'}}> 🗨️ </h2>
        <h2 style={{cursor:'pointer'}}> ➦ </h2>
      </div>
    </div>    
  );
};

const ExploreHeader = () => {
  return (
    <div className='exploreHeader'>
      <p id='header'>Sportzalize</p>
    </div>
  )
};
export default Explore
