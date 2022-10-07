import React from 'react'
import '../Style/find.css'
import Navbar from './Navbar';

import { Link } from 'react-router-dom';
import hamburger from '../images/hamburger.png'
import { ExploreHeader } from './Explore';
import { FindHeader } from './Find';

// Adventure images import
import biker from '../Image/biker.png'
import camping from '../Image/camping.png'
import travelling from '../Image/travelling.png'
import trekking from '../Image/trekking.png'
import party from '../Image/party.png'
import waterpark from '../Image/waterpark.png'


const Adventure = () => {
        var adventuresport = [
    {img:biker, name:'Biker'},
    {img:camping, name:'Camping'},
    {img:travelling, name:'Travelling'},
    {img:trekking, name:'Trekking'},
    {img:party, name:'Party'},
    {img:waterpark, name:'Water Park'},
    ]
    return (
        <div>
            <img src={hamburger} alt='hamburger' className='navslide' />
            <div className='navdiv'><Navbar /></div>
            <ExploreHeader/>
            <div className='mainfind'>
                <FindHeader/>
                <h1>Adventure</h1>
                <div className='subcategoryMain dajt'>
                    {
                        adventuresport.map((adv, index) => {
                            return <Link key={index} id="nodecoration" to="/find/location" state={{ image: adv.img, name: adv.name } }><AdventureSports image={adv.img} name={adv.name} /></Link>
                        })
                    }
                </div>
            </div>
        </div>
    )
};

const AdventureSports = (props) => {
    return (
        <div className='indoor'>
            <div className='cards bajt'>
                <img className='mg' height='130em' width='130em' src={props.image} alt='archery' />
                <p>{props.name}</p>
            </div>
        </div>
    )
};

export default Adventure