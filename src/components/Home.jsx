import Navbar from './Navbar';
import Slider from './Slider';
import ColumnsGrid1 from './ColumnsGrid1';
import ColumnsGrid2 from './ColumnsGrid2';
import ColumnsGrid3 from './ColumnsGrid3';
import ServicesGrid from './ServicesGrid';
import Footer from './Footer';
import TourType from './TourType';

const Home = () => {
    return (
        <>
            <Navbar/>
            <Slider/>
            <br/>
            <div className="tag2">
            Recommended Trips
            </div>
            <br/>
            <ColumnsGrid1/>
            <br/><br/><br/><br/><br/>
            <TourType/>
            <br/><br/><br/><br/><br/><br/>
            {/* <ColumnsGrid2/> */}
            <div className="tag2"> 
            Explore Provinces
            </div>
            <br/>
            <ColumnsGrid3/>
            <br/><br/><br/>
            <div className="tag2">
            Our Services
            </div>
            <br/>
            <ServicesGrid/>
            <br/><br/><br/><br/><br/>
            <Footer/>
        </>
    )
}
export default Home;