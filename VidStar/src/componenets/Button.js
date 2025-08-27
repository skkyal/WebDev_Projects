import React from 'react'
import {useHistory} from 'react-router-dom'

const Button = ({text}) => {
    const history=useHistory();

    const onClick=()=>{
        history.push('/login');
    }

    

    return (
        <div onClick={onClick} className="button">
            {text}
        </div>
    )

    
}

export default Button
