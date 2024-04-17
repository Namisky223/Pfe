import React from 'react';
import './blog.css'
import { BsArrowRightShort } from "react-icons/bs";
import img1  from "../../assets/Tanger.jpeg";
import img2  from "../../assets/mo.jpeg";
import img3  from "../../assets/moskou.jpeg";
import img4  from "../../assets/paris.jpeg";
import img5  from "../../assets/rabat.jpeg";
import img6  from "../../assets/tangerr.jpeg";
import img7  from "../../assets/souk.jpg";
const posts=[
    {
        id:1,
        postSrc:img1,
        Title:'let us have an afventure outside maroc',
        description:'descritption shbsbjsdndskfjcbgdhfjfkj fvhrhyjurifbfghjff rhfur',
        
    },
    {
        id:2,
        postSrc:img2,
        Title:'let us have an afventure outside maroc',
        description:'descritption shbsbjsdndskfjcbgdhfjfkj fvhrhyjurifbfghjff rhfur',
        
    },
    {
        id:3,
        postSrc:img3,
        Title:'let us have an afventure outside maroc',
        description:'descritption shbsbjsdndskfjcbgdhfjfkj fvhrhyjurifbfghjff rhfur',
        
    },
    {
        id:4,
        postSrc:img4,
        Title:'let us have an afventure outside maroc',
        description:'descritption shbsbjsdndskfjcbgdhfjfkj fvhrhyjurifbfghjff rhfur',
        
    },

   
]


const Blog = () => {
    return (
        <section className='blog container section'>
            <div className='secContainer'>
                <div className='secIntro'>
                    <h2 className='secTitle'>
                        our Best Blog?
                    </h2>
                    <p> an insi ahhsjsoosjjshyxxuxkx  whjjs</p>
                </div>
                <div className='mainContainer grid'>
                {
    posts.map((post) => {
        const { id, postSrc, Title, description } = post;
        return (
            <div className='singlePost grid' key={id}>
                <div className='imgDiv'>
                    <img src={postSrc} alt={Title} />
                </div>
                <div className='postDetails'>
                    <h3>{Title}</h3>
                    <p>{description}</p>
                </div>
                <a href="#" className='flex'>
                    <BsArrowRightShort className='icon' />Read more
                </a>
            </div>
        );
    })
}

        
                </div>
            </div>
        </section>
    );
}

export default Blog;
