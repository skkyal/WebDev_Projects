import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'

const NavLoggedIn = ({tvRef,moviesRef,newsRef,sportsRef}) => {
    const history=useHistory();
    const [search, setSearch] = useState('');
    const [width, setWidth] = useState(0)

    useEffect(() => {
        window.addEventListener('resize',setWidth(window.innerWidth));

        setWidth(window.innerWidth);
        console.log(window.onChange);
    }, [])
    return (
        <div className="navbar">
            <div style={{display:"flex",alignItems:"center"}}>
                <div className="logo" onClick={()=>{history.push('/dashboard')}}>
                    <i className="fas fa-play"></i>  VidStar
                </div>

                {
                    width>940?
                    <div className="navlist">
                    <ul>
                        <li onClick={()=>tvRef.current.scrollIntoView({ behavior: 'smooth' })}>TV</li>
                        <li onClick={()=>moviesRef.current.scrollIntoView({ behavior: 'smooth' })}>Movies</li>
                        <li onClick={()=>newsRef.current.scrollIntoView({ behavior: 'smooth' })}>News</li>
                        <li onClick={()=>sportsRef.current.scrollIntoView({ behavior: 'smooth' })}>Sports</li>
                    </ul>
                    </div>:null
                }
            </div>

            <div style={{display:"flex",alignItems:"center"}}>
                {
                    width>580?
                    <div className="search">
                        <input className="search" type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search" />
                        <i className="fas fa-search"></i>
                    </div>:null
                }
                    
                
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor:"transparent",marginRight:"15px", border:"0"}}>
                        <i className="far fa-user-circle"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#">My Profile</Dropdown.Item>
                        <Dropdown.Item href="#">View Watchlist</Dropdown.Item>
                        <Dropdown.Item href="/">Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}

export default NavLoggedIn
