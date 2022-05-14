import React from "react";
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ColumnsGrid1 from './components/ColumnsGrid1';
import ColumnsGrid2 from './components/ColumnsGrid2';
import ColumnsGrid3 from './components/ColumnsGrid3';
import SignIn from './components/SignIn';
import AdminDashboard from "./components/AdminDashboard";
import SignUp from "./components/SignUp";
import Footer from './components/Footer';
import ServicesGrid from "./components/ServicesGrid";
import Packages from "./components/Packages";
import {Route,Routes} from 'react-router';
import Home from './components/Home';
import TourList from "./components/TourList";
import Destinations from "./components/Destinations";
import Details from './components/Details';
import AgenciesGrid from "./components/AgenciesGrid";
const App = () => {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      {/* <Route path="/Destinations" element={<Destinations/>}/> */}
    {/* </Routes> */}
    {/* <Routes> */}
      <Route path="/pack_detail" element={<Details/>}/>
    {/* </Routes> */}
    {/* <Routes> */}
      <Route path="/signup" element={<SignUp/>}/>
      {/* <Route path="/AdminDashboard" element={<AdminDashboard/>}/> */}
      <Route path="/packages" element={<Packages/>}/>
      <Route path="/pack_detail" element={<Details/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/agencies" element={<AgenciesGrid/>}/>
    </Routes>
     
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      {/* <AdminDashboard/> */}
      {/* <Packages /> */}
    </>
  )
};
export default App;
