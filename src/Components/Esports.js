import React from 'react'
import '../Style/find.css'
import Navbar from './Navbar';

import { Link } from 'react-router-dom';
import hamburger from '../images/hamburger.png'
import { ExploreHeader } from './Explore';
import { FindHeader } from './Find';

//folder Imgs = esports, Img = sports, images = professional sports;

// pcgames import
import gtav from '../Imgs/gtav.png'
import valorant from '../Imgs/valorant.png'
import apexlegend from '../Imgs/apexlegend.png'
import csgo from '../Imgs/csgo.png'
import amongus from '../Imgs/amongus.png'
import fallguys from '../Imgs/fallguys.png'
import deceit from '../Imgs/deceit.png'
import warzone from '../Imgs/warzone.png'
import pubgpc from '../Imgs/pubgpc.png'
import propnight from '../Imgs/propnight.png'
import pacify from '../Imgs/pacify.png'
import leagueoflegend from '../Imgs/leagueoflegend.png'

// mobile games import
import pubg from '../Imgs/pubg.png'
import freefire from '../Imgs/freefire.png'
import cod from '../Imgs/cod.png'
import apexlegendmobile from '../Imgs/apexlegendmobile.png'
import mobilelegend from '../Imgs/mobilelegen.png'
import minimilitia from '../Imgs/minimilitia.png'

// other games import
import psv from '../Imgs/psv.png'
import vr from '../Imgs/vr.png'
import twok from '../Imgs/twok.png'
import xbox from '../Imgs/xbox.png'

const Esports = () => {
     var pcgames = [
    {img:gtav, name:'GTA V'},
    {img:valorant, name:'Valorant'},
    {img:apexlegend, name:'Apenlegend'},
    {img:csgo, name:'CS GO'},
    {img:warzone, name:'COD War Zone'},
    {img:amongus, name:'Amongus'},
    {img:fallguys, name:'Fall Guys'},
    {img:deceit, name:'Deceit'},
    {img:pacify, name:'pacify'},
    {img:leagueoflegend, name:'League of Legends'},
    {img:propnight, name:'Propnight'},
    {img:pubgpc, name:'Pubg'},
    ]

     var mobilegames = [
    {img:pubg, name:'PUBG'},
    {img:freefire, name:'Free Fire'},
    {img:apexlegendmobile, name:'Apenlegend Mobile'},
    {img:cod, name:'COD'},
    {img:mobilelegend, name:'Mobile Legends'},
    {img:minimilitia, name:'Mini Militia'},
    ]

     var othergames = [
    {img:vr, name:'VR'},
    {img:psv, name:'PS V'},
    {img:xbox, name:'X Box'},
    {img:twok, name:'2K'},
    ]
    return (
        <div>
            <img src={hamburger} alt='hamburger' className='navslide' />
            <div className='navdiv'><Navbar /></div>
            <ExploreHeader/>
            <div className='mainfind'>
                <FindHeader/>
                <h1>Esports</h1>
                <h2 style={{color:'rgb(56, 80, 235)'}}>PC Games</h2>
                <div className='subcategoryMain dajt'>
                    {
                        pcgames.map((pgames, index) => {
                            return <Link key={index} id='nodecoration' to="/find/location" state={{image:pgames.img, name:pgames.name}}><Pcgames image={pgames.img} name={pgames.name}/></Link>
                        })
                    }
                </div>
                <h2 style={{color:'rgb(56, 80, 235)'}}>Mobile Games</h2>
                <div className='subcategoryMain dajt'>
                    {
                        mobilegames.map((mgames, index) => {
                            return <Link key={index} id='nodecoration' to="/find/location" state={{image:mgames.img, name:mgames.name}}><Mobilegames image={mgames.img} name={mgames.name}/></Link>
                        })
                    }
                </div>
                <h2 style={{color:'rgb(56, 80, 235)'}}>Other Games</h2>
                <div className='subcategoryMain dajt'>
                    {
                        othergames.map((ogames, index) => {
                            return <Link key={index} id='nodecoration' to="/find/location" state={{image:ogames.img, name:ogames.name}}><Othergames image={ogames.img} name={ogames.name}/></Link>
                        })
                    }
                </div>

            </div>
        </div>
    )
};

const Pcgames = (props) => {
    return (
        <div className='indoor'>
            <div className='cards bajt'>
                <img className='mg' height='130em' width='130em' src={props.image} alt='archery' />
                <p>{props.name}</p>
            </div>
        </div>
    )
};

const Mobilegames = (props) => {
    return (
        <div className='indoor'>
            <div className='cards bajt'>
                <img className='mg' height='130em' width='130em' src={props.image} alt='archery' />
                <p>{props.name}</p>
            </div>
        </div>
    )
};

const Othergames = (props) => {
    return (
        <div className='indoor'>
            <div className='cards bajt'>
                <img className='mg' height='130em' width='130em' src={props.image} alt='archery' />
                <p>{props.name}</p>
            </div>
        </div>
    )
};

export default Esports