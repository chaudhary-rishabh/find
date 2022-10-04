import React from 'react'
import '../Style/find.css'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

import hamburger from '../images/hamburger.png'
import { ExploreHeader } from './Explore';
import { FindHeader } from './Find';

// import professional sports images
import archery from '../images/Archery.png'; 
import swimming from '../images/Swimming.png'; 
import athletics from '../images/Athletics.png'; 
import badminton from '../images/Badminton.png'; 
import basketball from '../images/Basketball.png'; 
import boxing from '../images/Boxing.png'; 
import breaking from '../images/Breaking.png'; 
import canoeflatwater from '../images/Canoeflatwater.png'; 
import canoeslalom from '../images/Canoeslalom.png'; 
import cycling from '../images/Cycling.png'; 
import diving from '../images/Diving.png'; 
import equestrian from '../images/Equestrian.png'; 
import fincing from '../images/Fincing.png'; 
import gymnastic from '../images/Gymnastic.png'; 
import football from '../images/Football.png'; 
import golf from '../images/Golf.png'; 
import handball from '../images/Handball.png'; 
import hockey from '../images/Hockey.png'; 
import indoorcycling from '../images/Indoorcycling.png'; 
import judo from '../images/Judo.png'; 
import marathonswimming from '../images/Marathonswimming.png'; 
import outdoorcycling from '../images/Outdoorcycling.png'; 
import rowing from '../images/Rowing.png'; 
import rugby from '../images/Rugby.png'; 
import sailing from '../images/Sailing.png'; 
import shooting from '../images/Shooting.png'; 
import tabletennis from '../images/Tabletennis.png'; 
import takewondo from '../images/Takewondo.png'; 
import tennis from '../images/Tennis.png'; 
import trampoline from '../images/Trampoline.png'; 
import vollyball from '../images/Vollyball.png'; 
import waterpolo from '../images/Waterpolo.png'; 
import weightlifting from '../images/Weightlifting.png'; 
import wrestling from '../images/Wrestling.png';

const Prosports = () => {

    var professional = [
    {img:archery, name:'Archery'},
    {img:swimming, name:'Swimming'},
    {img:athletics, name:'Athletics'},
    {img:badminton, name:'Badminton'},
    {img:basketball, name:'Basketball'},
    {img:boxing, name:'Boxing'},
    {img:canoeflatwater, name:'Canoeflatwater'},
    {img:canoeslalom, name:'Canoeslalom'},
    {img:cycling, name:'Cycling'},
    {img:diving, name:'Diving'},
    {img:equestrian, name:'Equestrian'},
    {img:fincing, name:'Fincing'},
    {img:football, name:'Football'},
    {img:golf, name:'Golf'},
    {img:gymnastic, name:'Gymnastic'},
    {img:handball, name:'Handball'},
    {img:hockey, name:'Hockey'},
    {img:indoorcycling, name:'Indoorcycling'},
    {img:judo, name:'Judo'},
    {img:marathonswimming, name:'Marathonswimming'},
    {img:outdoorcycling, name:'Outdoorcycling'},
    {img:rowing, name:'Rowing'},
    {img:sailing, name:'Sailing'},
    {img:shooting, name:'Shooting'},
    {img:tabletennis, name:'Tabletennis'},
    {img:takewondo, name:'Takewondo'},
    {img:tennis, name:'Tennis'},
    {img:trampoline, name:'Trampoline'},
    {img:vollyball, name:'Vollyball'},
    {img:waterpolo, name:'Waterpolo'},
    {img:weightlifting, name:'Weightlifting'},
    {img:wrestling, name:'Wrestling'},
    {img:rugby, name:'Rugby'},
    {img:breaking, name:'Breaking'},
  ]

    return (
        <div>
            <img src={hamburger} alt='hamburger' className='navslide' />
            <div className='navdiv'><Navbar /></div>
            <ExploreHeader/>
            <div className='mainfind'>
                <FindHeader/>
                <h1>Professional Sports</h1>
                <div className='subcategoryMain dajt'>
                    {
                        professional.map((pro) => {
                            return <Link id="nodecoration" to="/find/location" state={{ image: pro.img, name: pro.name } }><ProfessionalSports image={pro.img} name={pro.name}/></Link>
                        })
                    }
                </div>
            </div>
        </div>
    )
};

const ProfessionalSports = (props) => {
    return (
        <div className='indoor'>
            <div className='cards bajt'>
                <img className='mg' height='130em' width='130em' src={props.image} alt='archery' />
                <p>{props.name}</p>
            </div>
        </div>
    )
};

export default Prosports