import minarEpakistan from '../images/Details/minarEpakistan.jpg';
import Accordion from 'react-bootstrap/Accordion';
import Footer from './Footer';
import Navbar from './Navbar';
import Services from './Services';
import Reviews from './Reviews';

const Details = () => {
    return (
        <>
            <Navbar/>
            <h1 style={{textAlign:'center', marginTop: '50px'}}>Minar-e-Pakistan, Lahore Pakistan</h1>
            
            <br/><br/>

            <div className='row g-0'>
                <div className='col-xl-8 col-lg-8 col-md-8 col-sm-8'>

                <div style={{display:'flex', justifyContent:'center'}}>
                <img src={minarEpakistan} alt="minar-e-pakistan" style={{boxShadow: '0 2px 10px 0 rgb(153, 150, 150),0 2px 10px 0 rgb(153, 150, 150)'}} width="90%" height="500px"/>
                </div>

                <br/>

                <div style={{display:'flex', justifyContent:'center',marginLeft:"auto",marginRight:'auto', width:"90%"}}>
                <h6>Lorem ipsum dolor sit  amet consectetur, adipisicing elit. Mollitia placeat odit esse ea corporis eum perferendis adipisci debitis necessitatibus voluptatum maiores, veritatis illo repudiandae, nostrum eveniet fugit dolor! Qui, maiores?</h6>
                </div>

                <br/><br/><br/>

                {/* Question Accordian */}
                <Services title="What's Included" message="is available and included." service1="Accomodation" service2="Food" service3="Transport"/>
                <br/><br/>
                <Services title="What's Not Included" message="is not included." service1="Guide" service2="First Aid Box" service3="Photography"/>

                <br/><br/><br/>
                
                
                {/* Days Accordian */}
                <div style={{display:'flex', justifyContent:'center',marginLeft:"auto",marginRight:'auto', width:"100%"}}>
                <Accordion flush>
                <Accordion.Item eventKey="0">
                <h1 style={{color: 'dark'}}>Trip Plan</h1><br/>
                    <Accordion.Header style={{width:"800px"}}>Day 01</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Day 02</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Day 03</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Day 04</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                    </div>
                
            
                <br/><br/><br/>
                
                {/* FAQ Accordian */}
                <div style={{display:'flex', justifyContent:'center',marginLeft:"auto",marginRight:'auto', width:"100%"}}>
                <Accordion>
                <h1 style={{color: 'dark'}}>FAQ</h1><br/>
                <Accordion.Item eventKey="0">
                    <Accordion.Header style={{width:"800px"}}>Will we provide accomodation?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Will we provide tour guide?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Will we provide transportation?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Will we provide photographer?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
                </div>


                <br/><br/><br/><br/>
                

                <Reviews/>

                <br/><br/><br/><br/><br/><br/><br/><br/>

                </div>
                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4'>
                
                        {/* //SPACE FOR RIGHT SECTION................................................... */}

                </div>
            </div>

            
            <Footer/>
        </>
    )
}
export default Details;