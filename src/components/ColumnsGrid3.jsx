import React from 'react';
import RecommendedTripsCard from './RecommendedTripsCard';
import khaberPass from '../images/Provinces/khaberPass.jpg';
import kotDigiFort from '../images/Provinces/kotDigiFort.jpg';
import minarEpakistan from '../images/Provinces/minarEpakistan.jpg';
import ziarat from '../images/Provinces/ziarat.jpg';

export default function ColumnsGrid3() {
  return (
    <div className='row g-0'>
    <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
      <RecommendedTripsCard image={khaberPass} name={"Khyber Pass"}/> 
    </div>
    <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
      <RecommendedTripsCard image={kotDigiFort} name={"kot Digi Fort"}/> 
    </div>
    <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
      <RecommendedTripsCard image={minarEpakistan} name={"Minar-e-Pakistan"}/> 
    </div>
    <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
      <RecommendedTripsCard image={ziarat} name={"Ziarat"}/> 
    </div>
</div>
  );
}
