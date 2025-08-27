import React from 'react'
import {useHistory} from 'react-router-dom'
const Nav = () => {
    const history=useHistory();
    
    const onClick=()=>{
        history.push('/login');
    }

    return (
        <div className="navbar">
            <div className="logo">
                <i className="fas fa-play"></i>  VidStar
            </div>
            <div className="navsignin" onClick={onClick}>Sign In</div>
        </div>
    )
}

export default Nav
