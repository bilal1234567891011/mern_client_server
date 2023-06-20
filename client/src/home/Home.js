import React from 'react'
import { useLocation } from 'react-router-dom'
import { NavLink, useNavigate } from "react-router-dom";

import './home.css'
function Home() {
   const location=useLocation()

  return (
    <>

      <div className="nav">
        <span className="text">      Hi,{location.state.id} </span>
        <NavLink to={"/"}><button typeof="submit" className="btn2">Sign Up</button>
        
        </NavLink>
      </div>
      <div className="containers">
        <form action="/" id="forms">
            <label htmlFor="name" className="heading">Name your Organization</label>
            <input className='input-field' type="text" id="name" placeholder="enter organization name"/>
        </form>
        <h3>Select your organization Type below</h3>
        <div class="box-container">
             <div  className="box">
                <img className="img1" src="./images/first.png" alt=""/>
             </div>
             <div className="box">
                <img className="img2" src="./images/second.png" alt=""/>
                <p>Construction</p>
             </div>
             <div className="box">
                <img  src="./images/third.png" alt=""/>
                <p>Construction</p>
             </div>
             <div className="box">
                <img src="./images/four.png" alt=""/>
                <p>Construction</p>
             </div>
             <div className="box">
                <img src="./images/fifth.png" alt=""/>
                <p>Construction</p>
             </div>
             <div className="box">
                <img src="./images/six.png" alt=""/>
                <p>Construction</p>
             </div>
             <div className="box">
                <img src="./images/seven.png" alt=""/>
                <p>Construction</p>
             </div>
             <div className="box">
                <img src="./images/eight.png" alt=""/>
                <p>Construction</p>
             </div>
        </div>
   </div>
       </>
  )
}

export default Home