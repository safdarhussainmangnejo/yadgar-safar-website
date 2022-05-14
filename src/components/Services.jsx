import Accordion from 'react-bootstrap/Accordion';

const Services = (props) => {
    return (
        <>
        <div style={{display:'flex', justifyContent:'center',marginLeft:"auto",marginRight:'auto', width:"100%"}}>
            <Accordion flush>
            <Accordion.Item eventKey="0">
            <h1 style={{color: 'dark'}}>{props.title}</h1><br/>
                <Accordion.Header style={{width:"800px"}}>{props.service1}</Accordion.Header>
                <Accordion.Body>
                {props.service1} {props.message}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>{props.service2}</Accordion.Header>
                <Accordion.Body>
                {props.service2} {props.message}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>{props.service3}</Accordion.Header>
                <Accordion.Body>
                {props.service3} {props.message}
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            </div>
            </>
    )
}
export default Services;