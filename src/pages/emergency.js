import "./Emergency.css";
import Hero from "./Hero";
import Hero1 from "./Hero1";

import Hero2 from "./Hero2";
import Hero3 from "./Hero3";
import Hero4 from "./Hero4";
import Hero5 from "./Hero5";
import Hero6 from "./Hero6";

import Hero7 from "./Hero7";
import { XyzTransition } from "@animxyz/react";
import "@animxyz/core";

function Emergency() {
  return (
    <XyzTransition appear duration="auto">
      <div className="App">
        <div className="wrapper">
        <br/>
        <div className="wrapper1"><Hero /></div>
        <div className="wrapper1"><Hero1 /></div>
        <div className="wrapper1"><Hero2 /></div>
        <div className="wrapper1"><Hero3 /></div>
        <div className="wrapper1"><Hero4 /></div>
        <div className="wrapper1"><Hero5 /></div>
        <div className="wrapper1"><Hero6 /></div>
        <div className="wrapper1"><Hero7 /></div>
        <div className="wrapper1"><Hero /></div>
        <div className="wrapper1"><Hero /></div>
         
        </div>
      </div>
    </XyzTransition>
  );
}

export default Emergency;