import React from 'react'

const CarouselItem = ({data}) => {
    
    return (
        <div className="carouselitem" style={{
            backgroundImage:`linear-gradient(to right,rgba(1, 1, 92, 0) 0%,rgb(0, 0, 0) 50%, rgb(0,0,0) 100%) ,url(${data.image})`
            }}>
            
            <div>
                <h3>{data.title}</h3>
                <p style={{color:"gray"}}>{data.description}</p>
            </div>
            
        </div>
    )
}

export default CarouselItem
