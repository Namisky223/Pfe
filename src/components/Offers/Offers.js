import React from 'react';
import './offers.css'
import { MdBathtub, MdKingBed ,MdAirportShuttle, MdLocationOn } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import {Link} from 'react-router-dom';
import img1  from "../../assets/Tanger.jpeg";
import img2  from "../../assets/mo.jpeg";
import img3  from "../../assets/moskou.jpeg";
import img4  from "../../assets/paris.jpeg";
import img5  from "../../assets/rabat.jpeg";
import img6  from "../../assets/tangerr.jpeg";
import img7  from "../../assets/souk.jpg";
const offers=[
    {
        id:1,
        imgSrc:img2,
        destTitle:'desti',
        location:'loc',
        price:'$1000',
    },
    {
        id:2,
        imgSrc:img3,
        destTitle:'desti',
        location:'loc',
        price:'$1000',
    },
    {
        id:3,
        imgSrc:img4,
        destTitle:'desti',
        location:'loc',
        price:'$1000',
    },
    
]


const Offers = () => {
    return (
       <section className='offer container section'>
        <div className='secContainer'>
            <div className='secIntro'>
                <h2 className='secTitle'>
                    special offers
                </h2>
                <p> from historical cities to natural specteculars,come see the best of the world!</p>

            </div>
            <div className='mainContent grid'>{ offers.map((offer) => {
        const { id, imgSrc, destTitle, location, price } = offer;
        return (
                <div className='singleOffer'>
                <div className='destImage'>
                    <img src={imgSrc} alt={destTitle} />
                    <span className='discount'>
                        30%off
                    </span>
                </div>
                <div className='offerBody'>
                    <div className='price flex'>
                        <h4>
                           {price}
                        </h4>
                        <span className='status'>
                           for rent 
                        </span>
                    </div>
                    <div className='amenities flex'>
                        <div className='singleAmenity flex'>
                        <MdKingBed className='icon'/> 
                        <small>2 beds</small>
                        </div>
                        <div className='singleAmenity flex'>
                        <MdBathtub className='icon'/> 
                        <small>1 Bath</small>
                        </div>
                        <div className='singleAmenity flex'>
                        <FaWifi className='icon' />

                        <small>Wi-Fi</small>
                        </div>
                        <div className='singleAmenity flex'>
                        <MdAirportShuttle className='icon'/> 
                        <small>Shuttle</small>
                        </div>
    
                    </div>
                    <div className='location flex'>
                    <MdLocationOn className='icon' />
                    <small>450 vine #310,London</small>

                    </div>
                    <button className='btn flex'><Link to='details/{id}'>     view Details
                        <BsArrowRightShort className='icon' /></Link>
                        {/* view Details
                        <BsArrowRightShort className='icon' /> */}

                    </button>
                    </div>   
                </div>
                )
            })}
            </div>
        </div>
       </section>
    );
}

export default Offers;
