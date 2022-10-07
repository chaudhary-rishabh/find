import React from 'react'
import '../Style/find.css'
import '../Style/common.css'

import { Link } from 'react-router-dom'
import hamburger from '../images/hamburger.png'
import { ExploreHeader } from './Explore';
import { FindHeader } from './Find';
import Navbar from './Navbar';

// indoor images import
import velodrome from '../Img/velodrome.png'
import swimming from '../Img/swimming.png'
import airHockey from '../Img/airHockey.png'
import badminton from '../Img/badminton.png'
import basketball from '../Img/basketball.png'
import futsal from '../Img/futsal.png'
import handball from '../Img/handball.png'
import boxing from '../Img/boxing.png'
import squash from '../Img/squash.png' 
import karate from '../Img/karate.png' 
import taekwondo from '../Img/taekwondo.png' 
import tabletennis from '../Img/tabletennis.jpg'
import gym from '../Img/gym.png'
import vollyball from '../Img/vollyball.png'
import gymnastic from '../Img/gymnastic.png'
import weight from '../Img/weights.png'
import snooker from '../Img/snooker.png'
import weightlifting from '../Img/weightlifting.png'
import kabaddi from '../Img/kabaddi.png'
import chess from '../Img/chess.png'
import waterpolo from '../Img/waterpolo.png'
import shooting from '../Img/shooting.png'


// outdoor images import
import skiing from '../Img/skiing.png'
import running from '../Img/running.png'
import marathon from '../Img/marathon.png'
import hurdles from '../Img/hurdles.png'
import polevault from '../Img/polevault.png'
import highjump from '../Img/highjump.png'
import longjump from '../Img/longjump.png'
import shotput from '../Img/shotput.png'
import javelin from '../Img/javelin.png'
import hammer from '../Img/hammer.png'
import discus from '../Img/discus.png'
import surfing from '../Img/surfing.png'
import skating from '../Img/skating.png'
import canoeing from '../Img/canoeing.png'
import football from '../Img/football.png'
import cricket from '../Img/cricket.png'
import khokho from '../Img/khokho.png'
import hockey from '../Img/hockey.png'
import cycling from '../Img/cycling.png'
import archery from '../Img/archery.png'
import wrestling from '../Img/wrestling.png'
import sailing from '../Img/sailing.png'

// Other Sports
import dance from '../Img/dance.png'
import singing from '../Img/singing.png'
import yoga from '../Img/yoga.png'
import painting from '../Img/painting.png'
import drawing from '../Img/drawing.png'
import zumba from '../Img/zumba.png'


const Sports = () => {
      var indoorSports = [
    {img:swimming, name:'Swimming'},
    {img:badminton, name:'Badminton'},
    {img:basketball, name:'Basketball'},
    {img:boxing, name:'Boxing'},
    {img:velodrome, name:'Velodrome'},
    {img:gymnastic, name:'Gymnastic'},
    {img:handball, name:'Handball'},
    {img:karate, name:'Karate'},
    {img:shooting, name:'Shooting'},
    {img:tabletennis, name:'Tabletennis'},
    {img:taekwondo, name:'Taekwondo'},
    {img:vollyball, name:'Vollyball'},
    {img:waterpolo, name:'Waterpolo'},
    {img:weightlifting, name:'Weightlifting'},
    {img:wrestling, name:'Wrestling'},
    {img:chess, name:'Chess'},
    {img:weight, name:'Weights'},
    {img:gym, name:'Gym'},
    {img:kabaddi, name:'Kabaddi'},
    {img:snooker, name:'Snooker'},
    {img:squash, name:'Squash'},
    {img:futsal, name:'Futsal'},
    {img:airHockey, name:'Airhockey'},
    ]
    
      var outdoorSports = [
    {img:hammer, name:'Hammer Throw'},
    {img:running, name:'Running'},
    {img:javelin, name:'Javelin'},
    {img:sailing, name:'Sailing'},
    {img:canoeing, name:'Canoeing'},
    {img:football, name:'Football'},
    {img:cricket, name:'Cricket'},
    {img:discus, name:'Discus Throw'},
    {img:longjump, name:'Long Jump'},
    {img:highjump, name:'High Jump'},
    {img:marathon, name:'Marathon'},
    {img:archery, name:'Archery'},
    {img:shotput, name:'Shotput'},
    {img:skating, name:'Skating'},
    {img:surfing, name:'Surfing'},
    {img:cycling, name:'Cycling'},
    {img:hockey, name:'Hockey'},
    {img:khokho, name:'Kho Kho'},
    {img:polevault, name:'Pole Vault'},
    {img:skiing, name:'Skiing'},
    {img:hurdles, name:'Hurdles'},
    {img:swimming, name:'Swimming'},
    ]
    
      var otherSports = [
    {img:dance, name:'Dance'},
    {img:singing, name:'Singing'},
    {img:yoga, name:'Yoga'},
    {img:painting, name:'Painting'},
    {img:drawing, name:'Drawing'},
    {img:zumba, name:'Zumba'},
    ]
    
    return (
        <div>
            <img src={hamburger} alt='hamburger' className='navslide' />
            <div className='navdiv'><Navbar /></div>
            <ExploreHeader/>   
            <div className='mainfind'>
                <FindHeader />
                <h1>Sports</h1>
                <h2 style={{color:'rgb(56, 80 ,236)'}}>Indoor Sports</h2>
                <div className='subcategoryMain dajt'>
                    {
                        indoorSports.map((isports, index) => {
                            return <Link key={index} id='nodecoration' to="/find/location" state={{image:isports.img, name:isports.name}}><Indoor image={isports.img} name={ isports.name } /></Link>
                        })
                    }                
                </div>
                <h2 style={{color:'rgb(56, 80 ,236)'}}>Outdoor Sports</h2>
                <div className='subcategoryMain dajt'>
                    {
                        outdoorSports.map((osports, index) => {
                            return <Link key={index} id='nodecoration' to="/find/location" state={{image:osports.img, name:osports.name}}><Outdoor image={osports.img} name={ osports.name } /></Link>
                        })
                    }                
                </div>
                <h2 style={{color:'rgb(56, 80 ,236)'}}>Other Sports</h2>
                <div className='subcategoryMain dajt'>
                    {
                        otherSports.map((othersports, index) => {
                            return <Link key={index} id='nodecoration' to="/find/location" state={{image:othersports.img, name:othersports.name}}><Other image={othersports.img} name={ othersports.name } /></Link>
                        })
                    }                
                </div>
            </div>
        </div>
    )
};

const Indoor = (props) => {
    return (
        <div className='indoor'>
            <div className='cards bajt'>
                <img className='mg' height='130em' width='130em' src={props.image} alt='archery' />
                <p>{props.name}</p>
            </div>
        </div>
    )
};

const Outdoor = (props) => {
    return (
        <div className='outdoor'>
            <div className='cards bajt'>
                <img className='mg' height='130em' width='130em' src={props.image} alt='archery' />
                <p>{props.name}</p>
            </div>
        </div>
    )
};

const Other = (props) => {
    return (
        <div className='other'>
            <div className='cards bajt'>
                <img className='mg' height='130em' width='130em' src={props.image} alt='archery' />
                <p>{props.name}</p>
            </div>
        </div>
    )
};

export default Sports