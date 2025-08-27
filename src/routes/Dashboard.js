import React,{useEffect,useState,useRef} from 'react'
import CarouselEdit from '../componenets/CarouselEdit'
import CarouselList from '../componenets/CarouselList'
import NavLoggedIn from '../componenets/NavLoggedIn' 

const Dashboard = () => {

    const [movies, setMovies] = useState([]);
    const [tv, setTv] = useState([]);
    const [news,setNews] =useState([]);
    const [sports, setSports] = useState([]);

    const tvRef = useRef();
    const moviesRef = useRef();
    const newsRef = useRef();
    const sportsRef = useRef();

    
    const fetchMovies=async ()=>{
        const res=await fetch('http://localhost:5000/movies');
        return res.json();
    }
    const fetchTv=async ()=>{
        const res=await fetch('http://localhost:5000/tv');
        return res.json();
    }
    const fetchNews=async ()=>{
        const res=await fetch('http://localhost:5000/news');
        return res.json();
    }
    const fetchSports=async ()=>{
        const res=await fetch('http://localhost:5000/sports');
        return res.json();
    }

    useEffect (()=>{
        const getTv=async ()=>{
            const data = await fetchTv();
            setTv(data);
        }
        getTv();

        const getMovies=async ()=>{
            const data = await fetchMovies();
            setMovies(data);
        }
        getMovies();

        const getNews=async ()=>{
            const data = await fetchNews();
            setNews(data);
        }
        getNews();

        const getSports=async ()=>{
            const data = await fetchSports();
            setSports(data);
        }
        getSports();
        
    },[])

    return (
        <div className="basic">
            <NavLoggedIn tvRef={tvRef} moviesRef={moviesRef} newsRef={newsRef} sportsRef={sportsRef} />
            {/*<div style={{marginTop:"11vh"}}></div>*/}
            <CarouselEdit />
            <div ref={tvRef} id="tv" style={{marginLeft:"40px", paddingTop:"30px"}}>
                <div className="basicheading">TV Series</div>
                <CarouselList data={tv} dimen="listitem" />
            </div>
            <div ref={moviesRef} id="movies" style={{marginLeft:"40px", paddingTop:"30px"}}>
                <div className="basicheading">Movies</div>
                <CarouselList data={movies} dimen="listitem" />
            </div>
            <div ref={newsRef} id="news" style={{marginLeft:"40px", paddingTop:"30px"}}>
                <div className="basicheading">News</div>
                <CarouselList data={news} dimen="listitem-2" />
            </div>
            <div ref={sportsRef} id="sports" style={{marginLeft:"40px", paddingTop:"30px", paddingBottom:"100px"}}>
                <div className="basicheading">Sports</div>
                <CarouselList data={sports} dimen="listitem-2" />
            </div>
            
        </div>
    )
}

export default Dashboard
