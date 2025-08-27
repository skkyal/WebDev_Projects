import React from 'react'
import {useHistory} from 'react-router-dom'

const Logo = () => {
    const history=useHistory();
    const onClick=()=>{
        history.push('/');
    }
    return (
        <div className="vidStar" onClick={onClick}><i className="fas fa-play"></i>  VidStar</div>
    )
}

export default Logo
