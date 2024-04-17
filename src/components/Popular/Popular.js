import React from 'react';
import './popular.css'
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import img1  from "../../assets/Tanger.jpeg";
import img2  from "../../assets/mo.jpeg";
import img3  from "../../assets/moskou.jpeg";
import img4  from "../../assets/paris.jpeg";
import img5  from "../../assets/rabat.jpeg";
import img6  from "../../assets/tangerr.jpeg";
import img7  from "../../assets/souk.jpg";
const Data=[
    {
        id:1,
        imgSrc:img2,
        destTitle:'desti',
        location:'loc',
        grade:'Cultural Realax',
    },
    {
        id:2,
        imgSrc:img3,
        destTitle:'desti',
        location:'loc',
        grade:'Cultural Realax',
    },
    {
        id:3,
        imgSrc:img4,
        destTitle:'desti',
        location:'loc',
        grade:'Cultural Realax',
    },
    {
        id:4,
        imgSrc:img5,
        destTitle:'desti',
        location:'loc',
        grade:'Cultural Realax',
    },
    
]


const Popular = () => {
    return (
      <section className="popular section container">
        <div className='secContainer'>
            <div className='secHeader flex'>
        <div className="textDiv">
            <h2 className="secTitle">
                Popular Destination
            </h2>
            <p>
                From historical cities to natural specteculars, come see the best of the world!
            </p>
        </div>
        <div className="iconDiv flex">
        <BsArrowLeftShort className="icon leftIcon" />
        <BsArrowRightShort className="icon" />

        </div>
        </div>
        <div className='mainContent grid'>
            { Data.map(({id,imgSrc,destTitle,location,grade})=>{
                return(
                    <div className='singleDestination'>
                    <div className='destImage'>
                        <img src={imgSrc} alt="image title" />
                        <div className='overlayInfo'>
                            <h3>{destTitle}</h3>
                            <p> {location}</p>
                            <BsArrowRightShort className="icon " />
    
    
                        </div>
    
                    </div>
                    <div className='destFooter'>
                       <div className='number'>
                        0{id}</div> 
                        <div  className="destText flex">
                            <h6>{location}</h6>
                            <span className='flex'>
                                <span className='dot'>
                                <BsDot  className='icon'/>
                                </span>
    
                            </span>
                        </div>
                    </div> 
                    </div>) })} 


    </div>
        </div>
      </section>
    );
}

export default Popular;
