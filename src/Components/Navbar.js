import React from 'react'
import '../Style/Navbar.css'
import profileimg from '../images/profileimg.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='maindiv'>
            <Link id='nodecoration' to='/profile'><Boxes item={"Profile"}><ProfileDp /></Boxes></Link>
            <Link id='nodecoration' to='/find'><Boxes item={"Find"}/></Link>
            <Link id='nodecoration' to='/'><Boxes item={"Explore"}/></Link>
            <Link id='nodecoration' to='/message'><Boxes item={"Message"}/></Link>
            <Boxes item={"Settings"} />
            <div style={{marginTop:'40vh'}}>
                <Boxes item={"Logout"} />
            </div>
        </div>
    )
}

const Boxes = ({item, children}) => {
    return (
        <p className='boxes'>
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