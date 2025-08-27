import React from 'react'
import {Link} from 'react-router-dom'

const DropList = () => {
    return (
        <div className="dropdown-content">
            <Link to="/user" style={{textDecoration:'none',color:'black'}}><div>My Codes</div></Link>
            <div>Logout</div>
        </div>
    )
}

export default DropList
