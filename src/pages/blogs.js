import React from "react";
import "./blogs.css"
import { Link } from "react-router-dom";
function Blogs() {


  return (
    <div className="blogPage">
  
  <div className="container">
    <div className="logos">
      logo
    </div>
    <div className="buttons">
      <button>
      <Link to="/read">READ_ME</Link>
      
      </button>
      <button>
      <Link to="/create">CREATE_ME</Link>
      
      </button>
    </div>
  </div>
    </div>
  );
}

export default Blogs;