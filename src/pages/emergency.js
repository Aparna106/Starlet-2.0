import "./Emergency.css";
import Hero from "./Hero";
import Hero1 from "./Hero1";

import Hero2 from "./Hero2";
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
        <div className="wrapper1"><Hero /></div>
        <div className="wrapper1"><Hero /></div>
        <div className="wrapper1"><Hero /></div>
        <div className="wrapper1"><Hero /></div>
        <div className="wrapper1"><Hero /></div>
        <div className="wrapper1"><Hero /></div>
        <div className="wrapper1"><Hero /></div>
         
        </div>
      </div>
    </XyzTransition>
  );
}

export default Emergency;