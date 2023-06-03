import React from "react";
import RegistrationForm from "./Register";
import RegistrationForm1 from "./Register1";
import RegistrationForm2 from "./Register2";
import FlippyCard from "./FlippyCard";
import Data from "./data";
import "./careers.css";
import Data1 from "./data1";
import Data2 from "./data2";
function Career() {
    return (
        <div className="careerPage">
            <h1>Registration Forms [ONLY FOR WOMENS]</h1>
            <div className="c1">
                <FlippyCard
                    frontContent=<RegistrationForm />
                    backContent=<Data/>
                />
            </div>
            <div className="c2">
                <FlippyCard
                    frontContent=<RegistrationForm1 />
                    backContent=<Data1/>
                />
            </div>
            <div className="c3">
                <FlippyCard
                    frontContent=<RegistrationForm2 />
                    backContent=<Data2/>
                />
            </div>
        </div>
    );
}

export default Career;
