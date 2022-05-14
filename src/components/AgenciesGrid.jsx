import React from 'react';
import AgenciesCard from './AgenciesCard';
import adventureTour from '../images/Agencies/adventureTour.png';
import asianGateway from '../images/Agencies/asianGateway.png';
import baltistanTours from '../images/Agencies/baltistanTours.png';
import cityExpress from '../images/Agencies/cityExpress.png';
import coxKings from '../images/Agencies/coxKings.png';
import discoverPakistan from '../images/Agencies/discoverPakistan.png';
import { LocalFireDepartment } from '@mui/icons-material';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AgenciesGrid() {
  return (
    <>
    <Navbar/>
    <br/>
    <h1 style={{marginLeft:'20px'}}>TOUR AGENCIES & OPERATORS</h1>
<div style={{margin:'30px'}}>
    <div className='row g-0'>
      <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
        <AgenciesCard title="Adventure Tours Pakistan" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry." icon={adventureTour} /> 
      </div>
      <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
        <AgenciesCard title="Asian Gateways" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry." icon={asianGateway} /> 
      </div>
      <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
        <AgenciesCard title="Baltistan Tours" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry." icon={baltistanTours} /> 
      </div>
    </div>

    
    <div className='row g-0'>
      <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
        <AgenciesCard title="City Express Travels & Tours (Pvt) Ltd" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry." icon={cityExpress} /> 
      </div>
      <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
        <AgenciesCard title="Cox & Kings" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry." icon={coxKings} /> 
      </div>
      <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
        <AgenciesCard title="Discover Pakistan Tours & Trekking" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry." icon={discoverPakistan} /> 
      </div>
    </div>

    <div className='row g-0'>
      <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
        <AgenciesCard title="Explore Pakistan" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry." icon={adventureTour} /> 
      </div>
      <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
        <AgenciesCard title="Himalayan Holidays (Pvt) Ltd" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry." icon={asianGateway} /> 
      </div>
      <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
        <AgenciesCard title="Himalaya Treks & Tours" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry." icon={baltistanTours} /> 
      </div>
    </div>

    <div className='row g-0'>
    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
        <AgenciesCard title="Blue Sky Treks & Tours" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry." icon={cityExpress} /> 
      </div>
      <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
        <AgenciesCard title="Crystal Travels" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry." icon={coxKings} /> 
      </div>
      <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
        <AgenciesCard title="Hindukush Trails" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry." icon={discoverPakistan} /> 
      </div>
    </div>


</div>

<Footer/>
</>
  );
}
