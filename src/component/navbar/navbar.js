import React,{useState} from "react";
import "./navbar.css"
import { Link } from "react-router-dom";
function Navbar(){
const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));   

        return(
          <>
   <header>

<Link to="/main"><a>HOME</a></Link>
<Link to="/destination">DESTINATION</Link>
<Link to="/career">CAREERS</Link>
<Link to="/information">INFORMATION</Link>
<Link to="/">READ_ME</Link>

{!isAuth ? (
  <Link to="/login"> Login </Link>
) : (
  <>
    <Link to="/createpost"> CREATE_ME</Link>
  </>
)}

<Link to="/query">QUERY</Link>
</header>
<div className="line"></div>
</>
        )
    }
export default Navbar;