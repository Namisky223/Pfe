import React from 'react';
// import {useState} from 'react';
import './navbar.css';
import { Component } from "react";
import  MenuItems from "./MenuItems";
import { Link } from "react";
import { SiYourtraveldottv } from 'react-icons/si';
import {Link} from 'react-router-dom'
// import { AiFillCloseCircle } from "react-icons/ai";
// import { TbGridDots } from "react-icons/tb";

// class Navbar extends Component {
//   state = { clicked: false };
//   handleClick = () => {
//     this.setState({ clicked: !this.state.clicked });
//   };
  
//     render ( <nav className="NavbarItems">
//     <h1 className="navbar-logo"> 
// //               <SiYourtraveldottv className="icon" />Sky 
// //             </h1>
//     <div className="menu-icons" onClick={this.handleClick}>
//       <i
//         className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
//       ></i>
//     </div>
//     <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
//       {MenuItems.map((item, index) => {
//         return (
//           <li key={index}>
//             <Link className={item.cName} to={item.url}>
//               {item.title}
//             </Link>
//           </li>
//         );
//       })}
//       <button>sign Up</button>
//     </ul>
//   </nav>

//     );
  
// }
// export default Navbar;


const Navbar = () => {
  const[active,setActive]=useState('navBar')
  const showNav=()=>{
    setActive('navBar activeNavbar')
  }
  const removeNav=()=>{
    setActive('navBar ')
  }
  const [transparent,setTransparent]=useState('header')
  const addBg=()=>{
    if(window.scrollY >=10){
      setTransparent('header activeHeader')
    }
    else{
      setTransparent('header ')

    }
    window.addEventListener('scroll',addBg)
  }
  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1 className="flex">
              <SiYourtraveldottv className="icon" />Sky 
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link className="navLink" to="/home">Home</Link>
              {/* <a href="#" className="navLink">Home</a> */}
            </li>
            <li className="navItem">
            <Link className="navLink" to="/about">About</Link>

              {/* <a href="#" className="navLink">About</a> */}
            </li>
            <li className="navItem">
            <Link className="navLink" to="/service">service</Link>
              
              {/* <a href="#" className="navLink">service</a> */}
            </li>
            <li className="navItem">
            <Link className="navLink" to="/contact">Contacts</Link>

              {/* <a href="#" className="navLink">Contacts</a> */}
            </li>
            <li className="navItem">
            <Link className="navLink" to="/blog">Blog</Link>

              {/* <a href="#" className="navLink">Blog</a> */}
            </li>
           <div className="headerBtns flex">
            <button className="loginBtn">
            <Link  to="/blog">Login</Link>

              {/* <a href="#">Login</a> */}
            </button>
            <button className="btn">
            <Link className="navLink" to="/sign_up">Sign Up</Link>

              {/* <a href="#">Sign Up</a> */}
            </button>
           </div>
          </ul>
          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle /> 
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
        <TbGridDots />
        </div>
       
      </div>
      
    </section>
  );
};

export default Navbar;
