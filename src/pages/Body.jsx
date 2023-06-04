import { Link } from "react-router-dom";
import "./styles.css";

//info.
//emergencey, anonymous, laws
export default function Body() {
    return (
        <>
            <div
                className="page-features"
                xyz="fade flip-down stagger duration-10 delay-2 ease-out-back"
            >
                <div className="feature-item xyz-nested">
                    <div className="emergency">
                        <p>
                            <h1> EMERGENCY CONTACTS/HELPLINES</h1>
                        </p>

                        <p>
                            Click below for list of emergency national contacts
                            and helplines
                        </p>
                        <button>
                            <Link to="/emergency">CONTACTS</Link>
                        </button>
                    </div>
                </div>
                <div className="feature-item xyz-nested">
                    <div className="emergency">
                        <p>
                            <h1> CONTACT US</h1>
                        </p>

                        <p>
                            LET US HELP YOU. Click below to be able to message
                            us anonymous any complaints you have faced whilst
                            travelling and request assistance from loccal
                            authorities.
                        </p>
                        <Link to="/Emailjs">
                            <button>CONTACT US</button>
                        </Link>
                    </div>
                </div>
                <div className="feature-item xyz-nested">
                    <div className="emergency">
                        <p>
                            <h1> NATIONAL LAWS YOU NEED TO KNOW</h1>
                        </p>

                        <p>
                            Click below for a list of useful national laws and
                            punishable acts to know while travelling.
                        </p>
                        <Link to="/laws">
                            <button>LIST OF LAWS</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );