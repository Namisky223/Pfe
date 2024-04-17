import React from 'react';
import './about.css'

//apres on doit faire les recherches des vraies images(customer,montagne,hikings) 
import img4  from "../../assets/paris.jpeg";
import img5  from "../../assets/rabat.jpeg";
import img6  from "../../assets/tangerr.jpeg";
import video  from "../../assets/video.MP4";

const About = () => {
    return (
      <section className='about section'>
        <div className='secContainer'>
            <h2 className='title'>
                why hikings?
            </h2>
            <div className='mainContent container grid'>
                <div className='singleItem'>
                    <img src={img4} alt="image name" />
                    <h3>100 + Mountains</h3>
                    <p>
                        research shows that a change to break away from the normal rhythms of daily life reduces stress and improves health and well-being.

                    </p>
                </div>
                <div className='singleItem'>
                    <img src={img5} alt="image name" />
                    <h3>1000 + hikings</h3>
                    <p>
                        research shows that a change to break away from the normal rhythms of daily life reduces stress and improves health and well-being.
                        
                    </p>
                </div>
                <div className='singleItem'>
                    <img src={img6} alt="image name" />
                    <h3>2000 + customer</h3>
                    <p>
                        research shows that a change to break away from the normal rhythms of daily life reduces stress and improves health and well-being.
                        
                    </p>
                </div>
            </div>
            <div className='videoCard container'>
            <div className='cardContent grid'>
                <div className='cardText'>
                    <h2>Wonderful house experience there</h2>
                    <p> thenhzejdop shsudf qyyszui edhyryudf dydud og judfbhdff</p>

                </div>
                <div className='cardVideo'>
                    <video src={video} autoPlay loop muted type="video/MP4"></video>
                </div>
                </div>    
            </div>
        </div>
      </section>
    );
}

export default About;
