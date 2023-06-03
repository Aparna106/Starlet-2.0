import "./styles.css";
import Header from "./Header";
import "@animxyz/core";
import { XyzTransition } from "@animxyz/react";
import React from "react";
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

    <div className="cards">
    <section className="b1">
    
    <div className="im"></div>
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
 
 <h3>Recommended 4 am and 5pm</h3>
 
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
 
 <h3>Recommended 5pm-7pm</h3>
 
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
    

    <section className="b1">
    
    <div className="im1">hey</div>
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
 
 <h3>Recommended 4 am and 5pm</h3>
 
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
 
 <h3>Recommended 5pm-7pm</h3>
 
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
    <br/>
   
    </div>
    </div>
    
  );
}