import React,{useState} from 'react'

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const CarouselListItem = ({data,dimen}) => {

    const [display, setDisplay] = useState(false)
    const onShare=()=>{
        const link=window.location.href;
        navigator.clipboard.writeText(link);

        toast('Link Copied to Clipboard');
    }
    const onAdd=()=>{
        toast('Added to Wishlist');
    }

    return (
        <>
        <div className={dimen} onMouseOver={()=>setDisplay(true)} onMouseLeave={()=>setDisplay(false)} >
            <div style={{width:"100%",height:"100%"}}>
                <img
                    alt=""
                    style={{width:"100%",height:"100%"}}
                    draggable={false}
                    src={data.image}
                />

            {
                display?
                <div className="listitemdetail">
                    <div>{data.title}</div>
                    <div style={{fontSize:"0.8rem"}} >{data.description}</div>
                    
                    <i className="fas fa-share-alt" onClick={onShare}></i>
                    
                    <div className="watchlist" onClick={onAdd} >
                        <i className="fas fa-plus"></i>
                        <span> ADD TO WATCHLIST</span> 
                    </div>
                </div>:
                null
            }
            </div>
            
            
        </div>
        </>
    )
}

export default CarouselListItem
