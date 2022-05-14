
const ServicesCard = (props) => {
return (
    <>
        <div className="card service_card">
        <div className="card-body">
            <img src={props.icon} style={{height:'70px',width:'65px', paddingBottom:'10px'}}/>
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.desc}</p>
        </div>
        </div>
    </>
)
}
export default ServicesCard;