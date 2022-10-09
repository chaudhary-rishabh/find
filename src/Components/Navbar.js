import React from 'react'
import '../Style/Navbar.css'
import profileimg from '../images/profileimg.jpg';
import { Link,useLocation } from 'react-router-dom';
import { useLayoutEffect, useState, useEffect } from 'react'

// images
import explore from '../Image/explore.png'
import message from '../Image/message.png'
import setting from '../Image/setting.png'
import find from '../Image/find.png'

const Navbar = () => {
    let location = useLocation();
    useEffect(() => {
        
    }, [location])
    
    const logoutConfirm = (value) => {
        alert(value);
    }

    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
            function updateSize() {
                setSize(window.innerWidth);
            }
      
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <div className='maindiv'>
            <Link id='nodecoration'  to='/profile'><Boxes className={location.pathname === '/profile' ? 'activeboxes': 'boxes'} item={size < 800 ? "": "Profile"}><ProfileDp /></Boxes></Link>
            <Link id='nodecoration'  to='/find'><Boxes className={location.pathname === '/find' || location.pathname === '/find/location' || location.pathname === '/find/esports' || location.pathname === '/find/sports' || location.pathname === '/find/adventure' || location.pathname === '/find/competitiveesports' || location.pathname === '/find/professionalsports' ? 'activeboxes': 'boxes'} item={size < 800 ? <img height="30em" width="30em"  src={find} alt='find'/> : "Find"}/></Link>
            <Link id='nodecoration'  to='/'><Boxes className={location.pathname === '/' ? 'activeboxes': 'boxes'} item={size < 800 ? <img height="30em" width="30em" src={explore} alt="expl"/>: "Explore"} /></Link>
            <Link id='nodecoration'  to='/message'><Boxes  className={location.pathname === '/message' ? 'activeboxes': 'boxes'} item={size < 800 ? <img height="30em" width="30em"  src={message} alt="message"/>: "Message"} /></Link>
            <Link id='nodecoration' to='/setting'><Boxes className={location.pathname === '/setting' ? 'activeboxes' : 'boxes'} item={size < 800 ? <img height="30em" width="30em"  src={setting} alt="setting"/> : "Setting"} /></Link>
            <div  onClick={() => logoutConfirm('confirm logout?')} style={{ marginTop: '40vh' }}>
                <Boxes className={'boxes'} item={"Logout"} />
            </div>
        </div>
    )
};

const Boxes = ({ item, onClick, className, children }) => {
    return (
        <p onClick={onClick} className={className}>
            {children}
            {item}
        </p>
    )
};

const ProfileDp = () => {
    return (
        <img className='profilepic' src={profileimg} alt="profileimg" width={'60px'} height={'60px'} />
    )
};

export default Navbar