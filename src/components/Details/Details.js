// import img4  from "../../assets/paris.jpeg";
// import img5  from "../../assets/rabat.jpeg";
// import img6  from "../../assets/tangerr.jpeg";
// import video  from "../../assets/video.MP4";
//  export default function detail() {
// return (
//     <div className="container">
//     <div className="row">
//      <div className="col-6"> {img4}</div>
//      <div className="col-6"> </div>
//     </div>
//     </div>
// )
    
// }
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletepost } from "./actions.js";
import { useParams } from "react-router-dom";

 function Detail() { 
  
  const dispatch = useDispatch();
  const { id } = useParams();
  const offre = useSelector((data) => data.offre.filter((o)=>o.id===id));

    return (
        <div>
          {/* <h1>user id: {id}</h1> */}
          <table className="table table-striped ">
            <thead >
              <tr>
                <th>ID</th>
                <th>title</th>
                <th>body</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
          {offre.map((offre) => (
          <div className='singleOffer'>
          <div className='destImage'>
              <img src={offre.imgSrc} alt={offre.destTitle} />
              <span className='discount'>
                  30%off
              </span>
          </div>
          <div className='offerBody'>
              <div className='price flex'>
                  <h4>
                     {offre.price}
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
              <button className='btn flex'><Link to='/login/{login,password}'>  confirmer reservation?
                  <BsArrowRightShort className='icon' /></Link>
        

              </button>
              </div>   
          </div>
          ))}
        </tbody>
            </table>
        </div>
    )
}
export default Detail;