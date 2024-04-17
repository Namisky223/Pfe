import React from 'react';
import './home.css'
import {Link} from 'react-router-dom';
const Home = () => {
    return (
       <section className="home">
        <div className="secContainer container">

            <div className="homeText">

                <h1 className="title">
                    plan your trip with SKY
                </h1>
                <p className="subTitle">
                    travel to your favourite city with respecful of the environment!
                </p>
                <button className="btn">
                    <Link to="/temperature">check temperature</Link>
                    {/* <a href="#">Explore now</a> */}
                </button>
            </div>
            <div className="homeCard grid">
                <div className="locationDiv">
                    <label for="location">Location</label>
                    <input type="text" placeholder='Dream Destination' />
                </div>
                <div className="distDiv">
                    <label for="distance">Location</label>
                    <input type="text" placeholder='11/Meters' />
                </div>
                <div className="priceDiv">
                    <label for="price">Location</label>
                    <input type="text" placeholder='$140-$500' />
                </div>
                <button className='btn'>Search</button>
            </div>
        </div>
       </section>
    );
}

export default Home;
