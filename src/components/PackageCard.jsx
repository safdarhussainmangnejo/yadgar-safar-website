import StarIcon from '@mui/icons-material/Star';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import HotelIcon from '@mui/icons-material/Hotel';
import a from '../images/aa.jpeg';


const PackageCard = () => {
    return (
        <>
                <div className="row bdr" style={{border:'1px solid 	#eeeedd',margin:'auto', marginTop:'16px', display:'flex', borderRadius:'8px', width: '96%', height:'300px'}}>

                    <div className="col-5 g-0">
                    <img src={a} alt="image" height="298px" style={{width:'300px', float:'left', left:'0',borderRadius:'8px 0px 0px 8px', padding:"0px"}}/>
                    </div>

                    
                    <div className="col-7 g-0" style={{paddingRight:'10px'}}> 

                        <br/>
                        <div className="row">
            
                        <div className="col-6">  
                            <h3>Karachi Tour</h3>
                            <h5> <AccountCircleIcon style={{fontSize:'24px', paddingBottom:'4px'}}/> Jinnah Agency</h5> 
                            <h6>Duration: 6 days & 5 Nights</h6>
                            <h5>Services</h5>
                            <h6> <HotelIcon style={{paddingBottom:'4px'}}/> Accomodation <CheckCircleIcon  style={{paddingBottom:'4px', color:'green'}}/></h6>
                            <h6><PersonPinCircleIcon style={{paddingBottom:'4px'}}/> Guide Facility <CheckCircleIcon style={{paddingBottom:'4px', color:'green'}}/></h6>
                            <br/>
                            <h3>PKR 80,000</h3>

                        </div>

                        <div className="col-6" style={{display:'grid', justifyContent:'right', float:'right'}}>
                            <h5 >Reviews <StarIcon style={{fontSize:'16px', color:'orange'}}/><StarIcon style={{fontSize:'16px', color:'orange'}}/><StarIcon style={{fontSize:'16px', color:'orange'}}/><StarIcon style={{fontSize:'16px', color:'orange'}}/><StarIcon style={{fontSize:'16px', color:'orange'}}/></h5>
                            
                            <br/>
                            <br/> 
                            <h6>Age Range: 18 to 30</h6>
                            <br/>
                            <h6><RestaurantIcon  style={{paddingBottom:'4px'}}/>Food <CheckCircleIcon style={{paddingBottom:'4px', color:'green'}}/></h6>
                            <h6><LocalHospitalIcon style={{paddingBottom:'4px'}}/>First Aid Box <CancelIcon style={{paddingBottom:'4px', color:'red'}}/></h6>
                            <br/>
                            <button className="btn btn-outline-primary">Book Now</button>
                        </div>
                    </div>
                    </div>
                </div>
                
        </>
    )
}
export default PackageCard;