import { Col, Container, Row } from "react-bootstrap";

const CardExp = props => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <img src={props.exp.image} alt="" className="w-100"></img>{" "}
        </Col>
        <Col xs={8} style={{ paddingLeft: "30px" }}>
          <h3>{props.exp.role}</h3>
          <p className="mb-0">{props.exp.company}</p>
          <span>{props.exp.area}</span>
          <br></br>
          <span>{props.exp.startDate.substring(0, 10)}</span>
          <span>{props.exp.endDate}</span>

          <p className="pt-3">{props.exp.description}</p>
          <hr></hr>
        </Col>
      </Row>
    </Container>
  );
};

export default CardExp;
