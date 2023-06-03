import React from "react";
import RegistrationForm from "./Register";
import FlippyCard from "./FlippyCard";
import "./careers.css"
function Career() {


  return (
    <div className="careerPage">
       <h1>Registration Form for Homestays</h1>
       <div className="c1">
       <FlippyCard frontContent=<RegistrationForm /> backContent="Back of the card" />
       </div>
       <div className="c2">
       <FlippyCard frontContent=<RegistrationForm /> backContent="Back of the card" /> 
       </div>
       <div className="c3">
       <FlippyCard frontContent=<RegistrationForm /> backContent="Back of the card" /> 
       </div>
    </div>
  );
}

export default Career;
