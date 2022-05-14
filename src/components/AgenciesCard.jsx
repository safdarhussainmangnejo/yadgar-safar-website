
const AgenciesCard = (props) => {
return (
    <>
        <div className="card agency_card">
        <div className="card-body">
            <img src={props.icon} style={{height:'45px',width:'35px', paddingBottom:'10px'}}/>
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.desc}</p>
        </div>
        </div>
    </>
)
}
export default AgenciesCard;