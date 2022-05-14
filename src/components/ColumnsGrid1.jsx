import React from 'react';
import RecommendedTripsCard from './RecommendedTripsCard';
import jainTemple from '../images/Recommended/jainTemple.png';
import Mohenjodaro from '../images/Recommended/Mohenjodaro.JPG';
import quaidMazar from '../images/Recommended/quaidMazar.jpg';
import ranikot from '../images/Recommended/ranikot.jpeg';



export default function ColumnsGrid() {
  return (
    
    <div className='row g-0'>
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
          <RecommendedTripsCard image={jainTemple} name="Jain Temple"/> 
        </div>
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
          <RecommendedTripsCard image={quaidMazar} name="Mazar e Quaid"/> 
        </div>
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
          <RecommendedTripsCard image={Mohenjodaro} name="Mohenjo Daro"/> 
        </div>
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
          <RecommendedTripsCard image={ranikot} name="Ranikot Fort"/> 
        </div>
    </div>

  );
}
