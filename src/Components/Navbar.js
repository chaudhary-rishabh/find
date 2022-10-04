import React from 'react'
import '../Style/Navbar.css'
import profileimg from '../images/profileimg.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react'

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('');

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    
    const logoutConfirm = (value) => {
        alert(value);
    }
    return (
        <div className='maindiv'>
            <Link id='nodecoration' to='/profile'><Boxes  className={activeLink === 'profile' ? 'activeboxes': 'boxes'} onClick={() => onUpdateActiveLink('profile')} item={"Profile"}><ProfileDp /></Boxes></Link>
            <Link id='nodecoration' to='/find'><Boxes className={activeLink === 'find' ? 'activeboxes': 'boxes'} onClick={() => onUpdateActiveLink('find')} item={"Find"} /></Link>
            <Link id='nodecoration' to='/'><Boxes className={activeLink === 'explore' ? 'activeboxes': 'boxes'} onClick={() => onUpdateActiveLink('explore')} item={"Explore"} /></Link>
            <Link id='nodecoration' to='/message'><Boxes  className={activeLink === 'message' ? 'activeboxes': 'boxes'} onClick={() => onUpdateActiveLink('message')}  item={"Message"} /></Link>
            <Link id='nodecoration' to='/setting'><Boxes className={activeLink === 'setting' ? 'activeboxes' : 'boxes'} onClick={() => onUpdateActiveLink('setting')} item={"Settings"} /></Link>
            <div  onClick={() => logoutConfirm('confirm logout?')} style={{ marginTop: '40vh' }}>
                <Boxes className={'boxes'} item={"Logout"} />
            </div>
        </div>
    )
};

const Boxes = ({item, onClick, className, children}) => {
    return (
        <p onClick={onClick} className={className}>
            {children}
            {item}
        </p>
    )
}

const ProfileDp = () => {
    return (
        <img className='profilepic' src={profileimg} alt="profileimg" width={'60px'} height={'60px'}/>
    )
}

export default Navbar