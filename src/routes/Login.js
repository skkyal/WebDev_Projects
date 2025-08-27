import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'

import Logo from '../componenets/Logo'

const Login = () => {
    const history=useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [vemail, setVemail] =useState(false);
    const [vpass, setVpass] =useState(false);

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

    const onSubmit=(e)=>{
        e.preventDefault();
        
        history.push('/dashboard');
    }

    const styleCheck={
        backgroundColor:"red",
        marginTop:"5px",
        verticalAlign:"center"
    };

    return (
        <>
            <div className="login-page">
                <Logo />
                <div className="form-container">
                    <div className="form-header" >Sign In</div>
                    <form className="login-form">
                        <input className="form-detail" type="text" value={email} onChange={changeEmail} placeholder="Email" style={{borderWidth:`${vemail?2:0}px`}} />
                        {vemail?<div className="form-error">Enter a valid E-mail</div>:null}
                        <input className="form-detail" type="password" value={password} onChange={changePass} style={{borderWidth:`${vpass?2:0}px`}} placeholder="Password"/>
                        {vpass?<div className="form-error">Enter a valid Password</div>:null}
                        <button className="form-button" onClick={onSubmit} >Sign In</button>
                        <div style={{textAlign:'left',marginTop:"10px",fontSize:"0.9rem"}}>
                            <input type="checkbox" id="remember" name="remember" style={styleCheck} />
                            <label for="remember" style={{fontSize:"0.9rem",color:"slategray"}} >Remember Me</label>
                        </div>
                        <p className="login-message">Not registered? <Link to="/signup">Create an account</Link></p>
                    </form>
                </div>
            </div>
            <div>

            </div>
        </>
    )
}

export default Login
