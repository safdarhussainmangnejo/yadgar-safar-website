import React from 'react';
import mountain from '../images/Slider/mountain.jpg';
import gorakhHill from '../images/Slider/gorakhHill.jpeg';
import mosque from '../images/Slider/mosque.jpg';
import umerkotFort from '../images/Slider/umerkotFort.jpeg';
import lahore from '../images/Slider/lahore.jpg';
import islamabad from '../images/Slider/islamabad.jpg';
import Searchbar from './Searchbar';

const Slider = () => {
return (
    <>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <Searchbar/>
        <div class="carousel-inner">
        <div class="carousel-item active" data-interval="1200">
          <h1 style={{position: 'absolute', left:'20%', right:'20%',top:'32%',fontFamily:'poppins, sans-serif', fontWeight:'bold',fontSize:'55px', color:'white', textAlign:'center'}}> Explore Undiscovered Places <br/> in Pakistan</h1>
          <img src={mountain} class="d-block w-100" style={{height:'652px'}} alt="image1"/>
        </div>
        <div class="carousel-item">
          <h1 style={{position: 'absolute', left:'20%', right:'20%',top:'32%',fontFamily:'poppins, sans-serif', fontWeight:'bold',fontSize:'55px', color:'white', textAlign:'center'}}> Visit Gorakh Hill & Enjoy the <br/> Nature</h1>
          <img src={gorakhHill} class="d-block w-100" style={{height:'652px'}} alt="image2"/>
        </div>
        <div class="carousel-item">
          <h1 style={{position: 'absolute', left:'20%', right:'20%',top:'32%',fontFamily:'poppins, sans-serif', fontWeight:'bold',fontSize:'55px', color:'white', textAlign:'center'}}> Faisal Mosque Islamabad <br/> Pakistan</h1>
          <img src={mosque} class="d-block w-100" style={{height:'652px'}} alt="image3"/>
        </div>
        <div class="carousel-item">
          <h1 style={{position: 'absolute', left:'20%', right:'20%',top:'32%',fontFamily:'poppins, sans-serif', fontWeight:'bold',fontSize:'55px', color:'white', textAlign:'center'}}> Yes It's Umerkot Fort</h1>
          <img src={umerkotFort} class="d-block w-100" style={{height:'652px'}} alt="image3"/>
        </div>
        <div class="carousel-item">
          <h1 style={{position: 'absolute', left:'20%', right:'20%',top:'32%',fontFamily:'poppins, sans-serif', fontWeight:'bold',fontSize:'55px', color:'white', textAlign:'center'}}> It's Beautiful, It's Pakistan </h1>
          <img src={lahore} class="d-block w-100" style={{height:'652px'}} alt="image3"/>
        </div>
        <div class="carousel-item">
          <h1 style={{position: 'absolute', left:'20%', right:'20%',top:'32%',fontFamily:'poppins, sans-serif', fontWeight:'bold',fontSize:'55px', color:'white', textAlign:'center'}}> Feel the Wonderful Weather of Capital</h1>
          <img src={islamabad} class="d-block w-100" style={{height:'652px'}} alt="image3"/>
        </div>



        </div>
  </div>
    </>
);
}
export default Slider;