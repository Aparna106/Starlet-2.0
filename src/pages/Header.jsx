import { Link } from "react-router-dom";

export default function Header() {
    return (
      <div
        className="page-hero"
        xyz="fade small stagger ease-out-back duration-30"
      >
         <p className="hero-text xyz-nested">
        <h1 color="orange">LET'S DISCOVER INDIA!</h1>
        </p><br/>
 <Link to="http://127.0.0.1:5500/test.html"><div className="hero-logo xyz-nested"></div></Link>
       

      </div>
    );
} 