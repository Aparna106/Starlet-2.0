import "./styles.css";
import Header from "./Header";
import "@animxyz/core";
import { XyzTransition } from "@animxyz/react";
import React from "react";
import { Link } from "react-router-dom";
export default function Destination() {
 
  return (
    <div className="whole">
    <div className="wr">
    <XyzTransition appear duration="auto">
      <div className="page-wrap">
        
        <Header/>

      </div>
    </XyzTransition>
    </div>
<br/>

    <div className="cards">
    <section className="sec">
    <br/>
    <h2>YOUR TRAVEL GUIDES</h2>
    <div className="d1">

    <div className="a"></div>
   <div className="acontent">
    <h3>River Ganga</h3>
    
    <div className="small">
      <div className="lg"></div>
      <div className="ll"><h4>Uttarpradesh</h4></div>
      <div className="bt">
        <button>DISCOVER</button>
      </div>

    </div>
  </div>
    </div>
    <div className="d1">
      
    <div className="a1"></div>
    <div className="acontent">
 
 <h3>Best @  5pm</h3>
 
 <div className="small">
   <div className="lg"></div>
   <div className="ll"><h4>Meenakshi Temple</h4></div>
   <div className="bt">
     <button>DISCOVER</button>
   </div>

   </div>
 </div>

    </div>
    <div className="d1">
      
    <div className="a2"></div>
    <div className="acontent">
 
 <h3>Best @ 7pm</h3>
 
 <div className="small">
   <div className="lg"></div>
   <div className="ll"><h4>RED FORT</h4></div>
   <div className="bt">
     <button>DISCOVER</button>
   </div>

   </div>
 </div>
    </div>
    </section>
    
  


    
    <section className="secW">
    
  
    <h2>AVAILABLE HOMESTAYS</h2>
    <div className="d1W">

    <div className="aW"></div>
   <div className="acontentW">
 
    <h3>KERALA</h3>
    
    <div className="smallW">
      <div className="lgW"></div>
      <div className="llW"><h4>location 1</h4></div>
      <div className="btW">
        <button>DISCOVER</button>
      </div>

    </div>
  </div>
    </div>
    <div className="d1W">
      
    <div className="a1W"></div>
    <div className="acontentW">
 
 <h3>TAMIL NADU</h3>
 
 <div className="smallW">
   <div className="lgW"></div>
   <div className="llW"><h4>location 2</h4></div>
   <div className="btW">
     <button>DISCOVER</button>
   </div>

   </div>
 </div>

    </div>
    <div className="d1W">
      
    <div className="a2W"></div>
    <div className="acontentW">
 
 <h3>KARANATAKA</h3>
 
 <div className="small">
   <div className="lgW"></div>
   <div className="llW"><h4>location 3</h4></div>
   <div className="btW">
     <button>DISCOVER</button>
   </div>

   </div>
 </div>
    </div>
    </section>
   
    </div>
    </div>
    
  );
}