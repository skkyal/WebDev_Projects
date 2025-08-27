import React,{useState,useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from './CarouselItem'


const CarouselEdit = () => {
    const [header, setHeader] = useState([]);

    const fetchHeader=async ()=>{
        const res=await fetch('http://localhost:5000/header');
        return res.json();
    }
    useEffect(() => {
        const getHeader=async ()=>{
            const data = await fetchHeader();
            console.log(data);
            setHeader(data);
        }
        getHeader();
    }, [])
    return (
        <Carousel>
            {header.map(data=>{
                return <Carousel.Item key={data.id}>
                    <CarouselItem data={data} />
                </Carousel.Item >
            })}
        </Carousel>
    )
}

export default CarouselEdit
