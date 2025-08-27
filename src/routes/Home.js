import React from 'react'
import Nav from '../componenets/Nav';
import Button from '../componenets/Button';
const Home = () => {

    const mystyle1={
        fontSize: "2.2rem",
        padding:"20px 70px"
    };
    const mystyle2={
        fontSize: "1.4rem",
        padding:"20px 70px"
    };

    return (
        <div>
            <Nav />
            <div class="image1-container">
                <div>
                    <div style={mystyle1}>Welcome to VidStar</div>
                    <div style={mystyle2}>Join VidStar to watch the latest movies, TV shows, <br/>News and Live Matches</div>
                    <Button text="Login to Join VidStar" />
                </div>
            </div>
            <div class="image2-container">
                <div>
                    <div style={mystyle1}>Great Entertainment</div>
                    <div style={mystyle2}>Watch on smart TVs, PlayStation, Xbox, Chromecast,<br/>Apple TV,Blu-ray players and more.</div>
                    <Button text="Get Started" />
                </div>
            </div>
            <div class="image3-container">
                <div>
                    <div style={mystyle1}>Watch everywhere</div>
                    <div style={mystyle2}>Stream unlimited movies and TV shows on your phone,<br/> tablet, laptop, and TV.</div>
                    <Button text="Get Started" />
                </div>
            </div>
            <div class="image4-container">
                <div>
                    <div style={mystyle1}>Download your shows to <br/> watch offline</div>
                    <div style={mystyle2}>Save your favourites easily and always have <br/>something to watch.</div>
                    <Button text="Get Started" />
                </div>
            </div>
            
        </div>
    )
}


export default Home
