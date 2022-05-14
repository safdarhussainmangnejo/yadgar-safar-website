import Navbar from "./Navbar";
import Footer from "./Footer";
import Searchbar from './Searchbar';
import { FormGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';
import { Button } from '@mui/material';
import { Collapse } from '@mui/material';
import {useState} from 'react';
import PackageCard from "./PackageCard";
import '../index.css';

const Packages = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <Navbar/>

            <br/>

            {/* <div className="row">
            <Searchbar style={{top:"10px"}} />
            </div> */}
            
            <div className="row g-0">

                {/* space left side */}
                <div className="col-1"></div>
                
                {/* sort & filter */}
                <div className="col-3" style={{border:'1px solid gray',borderRadius:"8px",margin:'10px',paddingLeft:"10px"}}>
                    
                    <h3 style={{color: '#0d6efd', paddingTop:'8px'}}>Filters</h3>
                    <hr style={{color: '#0d6efd'}}/>
                    <h4>Tour Type</h4>
                    <hr style={{color: '#0d6efd'}}/>
                    
                    <div style={{paddingLeft:'25px'}}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="Group tour" />
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="Private tour" />
                    </FormGroup>
                    </div>

                    <hr style={{color: '#0d6efd'}}/>

                    <h4>Departure Month</h4>

                    <hr style={{color: '#0d6efd'}}/>

                    
                    <div style={{paddingLeft:'25px'}}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="January" />
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="Febuary" />
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="March" />
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="April" />
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="May" />
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="June" />
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="July" />
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="August" />
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="Sepetember" />
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="Octomber" />
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="November" />
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="December" />
                    </FormGroup>
                    </div>

                    <hr style={{color: '#0d6efd'}}/>

                    <h4>Age Range</h4>

                    <hr style={{color: '#0d6efd'}}/>

                    <div className="row g-0">
                        <div className="col-6">

                            <div style={{margin:'8px', padding:'auto'}}>
                            <Button  variant="outlined" fullWidth>Under 18</Button>
                            </div>

                            <div style={{margin:'8px', padding:'auto'}}>
                            <Button variant="outlined" fullWidth>31-40</Button>
                            </div>

                            <div style={{margin:'8px', padding:'auto'}}>
                            <Button variant="outlined" fullWidth>51-70</Button>
                            </div>

                        </div>
                        <div className="col-6">

                            <div  style={{margin:'8px', padding:'auto'}}>
                            <Button variant="outlined" fullWidth>18 - 30</Button>
                            </div>

                            <div style={{margin:'8px', padding:'auto'}}>
                            <Button variant="outlined" fullWidth>41-50</Button>
                            </div>

                            <div style={{margin:'8px', padding:'auto'}}>
                            <Button variant="outlined" fullWidth>70 +</Button>
                            </div>
                        </div>
                    </div>

                    <hr style={{color: '#0d6efd'}}/>

                    <h4>Regions</h4>

                    <hr style={{color: '#0d6efd'}}/>

                    
                    <div style={{paddingLeft:'25px'}}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="Sindh" />
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="Punjab" />
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="Balochistan" />
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="KPK" />
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="Gilgit Baltistan" />
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="Azad Kashmir" />
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="Islamabad" />
                    </FormGroup>
                    </div>

                    <hr style={{color: '#0d6efd'}}/>

                    <h4>Cities</h4>

                    <hr style={{color: '#0d6efd'}}/>

                    
                    <div style={{paddingLeft:'25px'}}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="Karachi" />
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="Hyderabad" />
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="Tharparkar" />
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="Sukkur" />
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="Lahore" />
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="Multan" />
                    </FormGroup>
                        <Button
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                        >
                            Show More / Hide
                        </Button>
                        <Collapse in={open}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultUnChecked />} label="Rawalpindi" />
                            <FormControlLabel control={<Checkbox defaultUnChecked />} label="Bahawalpur" />
                            <FormControlLabel control={<Checkbox defaultUnChecked />} label="Quetta" />
                            <FormControlLabel control={<Checkbox defaultUnChecked />} label="Ziarat" />
                            <FormControlLabel control={<Checkbox defaultUnChecked />} label="Gwadar" />
                            <FormControlLabel control={<Checkbox defaultUnChecked />} label="Peshawar" />
                            <FormControlLabel control={<Checkbox defaultUnChecked />} label="Naran" />
                            <FormControlLabel control={<Checkbox defaultUnChecked />} label="Chitral" />
                            <FormControlLabel control={<Checkbox defaultUnChecked />} label="Abbottabad" />
                            <FormControlLabel control={<Checkbox defaultUnChecked />} label="Nathia Gali" />
                            <FormControlLabel control={<Checkbox defaultUnChecked />} label="Mardan" />
                            <FormControlLabel control={<Checkbox defaultUnChecked />} label="Shogran" />
                            <FormControlLabel control={<Checkbox defaultUnChecked />} label="Skardu" />
                            <FormControlLabel control={<Checkbox defaultUnChecked />} label="Gilgit" />
                            <FormControlLabel control={<Checkbox defaultUnChecked />} label="Astore" />
                            <FormControlLabel control={<Checkbox defaultUnChecked />} label="Hunza" />
                            <FormControlLabel control={<Checkbox defaultUnChecked />} label="Muzaffabad" />
                            <FormControlLabel control={<Checkbox defaultUnChecked />} label="Neelam Valley" />
                            <FormControlLabel control={<Checkbox defaultUnChecked />} label="Rawalacot" />
                            <FormControlLabel control={<Checkbox defaultUnChecked />} label="Mirpur" />
                        </FormGroup>
                        </Collapse>
                    </div>
                </div>

                {/* packages card */}
                <div className="col-7" style={{border:'1px solid gray',borderRadius:"8px",margin:'10px'}}>

                    <PackageCard/>
                    <PackageCard/>
                    <PackageCard/>
                    <PackageCard/>
                    <PackageCard/>
                    <PackageCard/>
                    <br/>

                </div>
                











                </div>

                {/* space right */}
                <div className="col-1"></div>

            {/* </div> */}
            






            {/* <Footer/> */}
        </>
    )
}
export default Packages;