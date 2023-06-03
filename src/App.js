import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Destination from "./pages/Destination";
import Footer from "./component/footer/footer";
import Navbar from "./component/navbar/navbar";
import Career from "./pages/Careers";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
import Main from "./pages/Main";
import Emergency from "./pages/emergency";
import Lawpage from "./pages/laws";
import QueryPageS from "./pages/Query";
import Emailjs from "./pages/helpannonymous";
function App() {

  

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));   
  return (
    <Router>
 
    <Navbar/>
    <Routes> 

        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
    <Route path="/main" Component={Main}/>
    <Route path="/information" Component={Info}/>
    <Route path="/destination" Component={Destination}/>
    <Route path="/career" Component={Career}/>
    <Route path="/query" Component={QueryPageS}/>
    <Route path="/emergency" Component={Emergency}/>
    <Route path="/laws" Component={Lawpage}/>
    <Route path="/emailjs" Component={Emailjs}/>


      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
