import { Link } from "react-router-dom";
import "./styles.css"
export default function Body() {
    return (
      <>
        <div
          className="page-features"
          xyz="fade flip-down stagger duration-10 delay-2 ease-out-back"
        >
          <div className="feature-item xyz-nested">
          <div className="emergency">
          <p >
               <h1> EMERGENCY HELP_LINES</h1>
            </p>

            <p>
                about EMERGENCY contact
            </p>
           <button><Link to="/emergency">go...</Link></button> 
          </div>
           
          </div>
          <div className="feature-item xyz-nested">
          <div className="emergency">
          <p >
               <h1> LET US HELP YOU</h1>
            </p>

            <p>
                about EMERGENCY contact
            </p>
           <Link to="/emailjs"><button>go...</button></Link> 
          </div>


          </div>
          <div className="feature-item xyz-nested">

          <div className="emergency">
          <p >
               <h1> LAWS YOU NEED TO KNOW</h1>
            </p>

            <p>
                about EMERGENCY contact
            </p>
           <Link to="/laws"><button>go...</button></Link> 
          </div>

          </div>
        </div>
        
      </>

    );
  }