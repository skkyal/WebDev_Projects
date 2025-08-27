import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'

import Logo from '../componenets/Logo'

const SignUp = () => {
    const history=useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const [vemail, setVemail] =useState(false);
    const [vpass, setVpass] =useState(false);
    const [vname, setVname] = useState(false);

    const changeEmail=(e)=>{
        setEmail(e.target.value);

        if(e.target.value==='') setVemail(true);
        else setVemail(false)
    }
    const changePass=(e)=>{
        setPassword(e.target.value);
        
        if(e.target.value==='') setVpass(true);
        else setVpass(false)
    }

    const changeName=(e)=>{
        setName(e.target.value);

        if(e.target.value==='') setVname(true);
        else setVname(false)
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        history.push('/login');
    }



    return (
        <>
            <div className="login-page">
                <Logo />
                <div className="form-container">
                    <div className="form-header" >Create Account</div>
                    <form className="login-form">
                        <input className="form-detail" type="text" value={name} onChange={changeName} placeholder="Your Name" style={{borderWidth:`${vname?2:0}px`}} />
                        {vname?<div className="form-error">Enter a valid Name</div>:null}
                        <input className="form-detail" type="text" value={email} onChange={changeEmail} placeholder="Email" style={{borderWidth:`${vemail?2:0}px`}} />
                        {vemail?<div className="form-error">Enter a valid E-mail</div>:null}
                        <input className="form-detail" type="password" value={password} onChange={changePass} style={{borderWidth:`${vpass?2:0}px`}} placeholder="Password"/>
                        {vpass?<div className="form-error">Enter a valid Password</div>:null}
                        <button className="form-button" onClick={onSubmit}>Create New Account</button>
                        <p className="login-message">Already registered? <Link to="/login">Login</Link></p>
                    </form>
                </div>
            </div>
            <div>

            </div>
        </>
    )
}

export default SignUp
