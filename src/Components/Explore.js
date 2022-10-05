import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { RWebShare } from "react-web-share"; //share api
import '../Style/explore.css'
import { v4 as uuidv4 } from "uuid";

// import '../Style/common.css'
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

import hamburger from '../images/hamburger.png'

import nba from  '../videos/nba.mp4'

const Explore = () => {
  const d = new Date();
  var uploadDate = d.toDateString();
  var [explorePosts, setExplorePosts] = useState([
    { id: 1, postHeadDp: exploredpone, time: { uploadDate }, name: 'Suzan', sport: 'Chess', post: swimming, likes: 341 },
    { id: 2, postHeadDp: exploredptwo, time: { uploadDate }, name: 'Princia', sport: 'Cricket', post: vollyball, likes: 232 },
    { id: 3, postHeadDp: exploredpthree, time: { uploadDate }, name: 'Om', sport: 'Football', post: swimming3, likes: 500 },
    { id: 4, postHeadDp: exploredpfour, time: { uploadDate }, name: 'Arijeet', sport: 'Tracking', post: travelling, likes: 989 },
    { id: 5, postHeadDp: exploredpfive, time: { uploadDate }, name: 'Jiona', sport: 'Biker', post: cycling2, likes: 133 },
    { id: 6, postHeadDp: exploredpsix, time: { uploadDate }, name: 'Diana', sport: 'Cricket', post: girlgym, likes: 598 },
    { id: 7, postHeadDp: exploredpseven, time: { uploadDate }, name: 'Pooja', sport: 'Running', post: judo, likes: 570 },
    { id: 8, postHeadDp: exploredptwo, time: { uploadDate }, name: 'Priana', sport: 'Singing', post: football, likes: 930 },
    { id: 9, postHeadDp: exploredpone, time: { uploadDate }, name: 'Raynia', sport: 'Dancing', post: surf, likes: 200 },
    { id: 10, postHeadDp: exploredpthree, time: { uploadDate }, name: 'Varun', sport: 'Gym', post: boxing, likes: 140 },
    { id: 11, postHeadDp: exploredpfive, time: { uploadDate }, name: 'Rohit', sport: 'Wrestling', post: icehockey, likes: 724 }
  ]);

    // for comments render onclick
  var [showComment, setShowComment] = useState(false);
  const renderComment = () => {
    setShowComment(current => !current);
  };
 
  return (
    <div>
      <img src={hamburger} alt='hamburger' className='navslide' />
      <div className='navdiv'><Navbar /></div>
      <ExploreHeader />
        {explorePosts.map((cmt) => {
          return (
            <div style={{ float: 'right', clear: 'both' }}>
              { showComment && <Comments />}
            </div>
          )
        })}
      <div className='mainexplore' style={{marginLeft:'20vw'}}>
        {explorePosts.map((posts) => {
          return (
            <Slideshow profileImg={posts.postHeadDp} postHeadDp={posts.postHeadDp} key={posts.id} post={posts.post} name={posts.name} time={uploadDate} sport={posts.sport} renderComment={renderComment} />
          )
        })}
        
      </div>
    </div>
  )
};

export const Slideshow = (props) => {
    //post likes button and total likes
  var [likebtn, setLikebtn] = useState('🤍');

  var [totalLikes, setTotalLikes] = useState(734);
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
        <Link to='/profile' state={{image:props.profileImg}}><img className='profileRadius' src={props.postHeadDp} height={'80px'} width={'80px'} alt="exploreimg" /></Link>
          <div>
          <h3>{props.name}</h3>
          <h3>{props.time}</h3>
          <h3>{props.sport}</h3>
        </div>
      </div>
      <div className='back'>
        <img src={props.post} alt='post' className='postimg'/>
        {/* <video className='postimg' controls>
          <source src={nba} type="video/mp4" />
        </video> */}
      </div>
      <div className='postButton'>
        <h2 onClick={changeLikebtn} style={{cursor:'pointer'}}> {likebtn} {totalLikes} </h2>
        <h2 onClick={props.renderComment} style={{ cursor: 'pointer' }}> 🗨️ </h2>
        
        {/* web share api */}
        <RWebShare
          data={{
            title: "Sportsalize",
            url: "https://soulgiannis.github.io/find",
            text: `Profile of ${props.name}`,
          }}>
          <h2 style={{cursor:'pointer'}}> ➦ </h2>
        </RWebShare>
      </div>
    </div>    
  );
};

export const ExploreHeader = (props) => {
  return (
      <div className='exploreHeader'>
        <p id='header'>Sportzalize</p>
      </div>
  )
};


const Comments = (props) => {

    // for adding Comments
  var [comment, setComment] = useState([]);
  var [input, setInput] = useState();
  var [profileInput, setProfileInput] = useState();

  var handleInput = (e) => {
    setInput(e.target.value);
    setProfileInput(exploredpseven);
  };
  var handleSubmit = (e) => {
    e.preventDefault();
    setComment([...comment, {title:input, id:uuidv4(),profile: profileInput, close:'❌', completed: false}]);
  }
  // var [commentValue, setCommentValue] = useState([
  //   {
  //     posts: {
  //       postone: {one:{ name: exploredpfive, comment: 'Nice pic' },two:{name:exploredpone, comment:'Great'}},
  //       postTwo: { name: exploredpthree, comment: 'Keep it up'},
  //       postThree: { name: exploredpthree, comment: 'Champion'},
  //       postFour: { name: exploredpthree, comment: 'Amazing'},
  //       postFive: { name: exploredpthree, comment: '💛❣'}
  //     }
  //   }
  // ]);
  
//delete comment
  const handleDelete = ({ id }) => {
    return setComment(comment.filter((cmt) => cmt.id !== id))
  };

//display image tag after first comment is added
  const firstCommentAdded = () => {
    if (comment === '') {
      return true;
    } 
  };
  return (
    <div className='comments'>
      <h2>Comments</h2>
      <div className='commentsInner'>
        {comment.map((cmt) => {
          return (
            <div className='commentbox'>
              <Link to="/profile" state={{image:cmt.profile}}><img style={{ cursor: 'pointer' }} src={cmt.profile} width={'45em'} height={'45em'} alt="profile img" /></Link>
              <p>{cmt.title}</p>
              <p style={{ cursor: 'pointer' }} onClick={() => handleDelete(cmt)}>{cmt.close}</p>
            </div>
          )
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleInput} placeholder='comment something' className='commentsInput' />
        <button type='submit' className='commentsSubmit' value='  '>⬆️</button>
      </form>
    </div>
  )
};

export default Explore 
