import ActionAreaCard from './SimpleCard';
import groupTour from '../images/TourType/groupTour.jpg'
import privateTour from '../images/TourType/privateTour.jpg'

const TourType = () => {

    return (
        <>
        <br/>
        <div className="row" style={{boxShadow: '0 2px 10px 0 rgb(153, 150, 150),0 2px 10px 0 rgb(153, 150, 150)',marginLeft:'auto', marginRight:'auto',borderRadius:'10px', width:'90%', height:'300ox', padding:'1.5rem'}}>

        <div className="col-6" style={{margin:'auto'}}>
            <h1>Adventure, Your Way</h1>
            <h2>No matter who you're looking <br/> to travel with, we'll make sure everything's taken care of.</h2>
        </div>
        <div className="col-3">
            <ActionAreaCard adv="Group Adventure" imeg={groupTour}/>
        </div>
        <div className="col-3">
            <ActionAreaCard adv="Private Adventure" imeg={privateTour}/>
        </div>



        </div>
        <br/><br/>
        </>
    )
}
export default TourType;