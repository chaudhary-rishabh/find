import React from 'react'
import '../Style/find.css'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

import hamburger from '../images/hamburger.png'
import { ExploreHeader } from './Explore';
import { FindHeader } from './Find';

// import compi sports images
import pubg from '../Imgs/pubg.png'
import freefire from '../Imgs/freefire.png'
import cod from '../Imgs/cod.png'
import apexlegendmobile from '../Imgs/apexlegendmobile.png'
import mobilelegend from '../Imgs/mobilelegen.png'
import minimilitia from '../Imgs/minimilitia.png'
import valorant from '../Imgs/valorant.png'
import pubgpc from '../Imgs/pubgpc.png'
import leagueoflegend from '../Imgs/leagueoflegend.png'
import csgo from '../Imgs/csgo.png'
import apexlegend from '../Imgs/apexlegend.png'

const Compiesports = () => {
        var compiesports = [
    {img:pubg, name:'PUBG'},
    {img:apexlegend, name:'Apex Legend'},
    {img:freefire, name:'Free Fire'},
    {img:apexlegendmobile, name:'Apenlegend Mobile'},
    {img:cod, name:'COD'},
    {img:mobilelegend, name:'Mobile Legends'},
    {img:minimilitia, name:'Mini Militia'},
    {img:valorant, name:'Valorant'},
    {img:pubgpc, name:'PUBG PC'}, 
    {img:leagueoflegend, name:'Legue of Legends'}, 
    {img:csgo, name:'CS GO'}, 
    ]

    return (
        <div>
            <img src={hamburger} alt='hamburger' className='navslide' />
            <div className='navdiv'><Navbar /></div>
            <ExploreHeader/>
            <div className='mainfind'>
                <FindHeader/>
                <h1>Competitive Esports</h1>
                <div className='subcategoryMain dajt'>
                    {
                        compiesports.map((compi) => {
                            return <Link id='nodecoration' to="/find/location" state={{image:compi.img, name:compi.name}}><CompetitiveEsports image={compi.img} name={compi.name}/></Link>
                        })
                    }
                </div>
            </div>
        </div>
    )
};

const CompetitiveEsports = (props) => {
    return (
        <div className='indoor'>
            <div className='cards bajt'>
                <img className='mg' height='130em' width='130em' src={props.image} alt='archery' />
                <p>{props.name}</p>
            </div>
        </div>
    )
};

export default Compiesports