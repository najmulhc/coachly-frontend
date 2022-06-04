import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import footerImg from "./img/footerImg.png";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const App = () => {
  return (
    <div className=" bg-base-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register /> } />
      </Routes>
     <div className="container max-w-sm mx-auto"> <img src={footerImg} className="w-full mb-[-5px] " alt="" /></div>
      <Footer/> 
    </div>
  );
};

export default App;
