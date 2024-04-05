import { Container, Row, Col } from "react-bootstrap";
import { BsPlusLg, BsPencil } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";

const Formation = () => {
  return (
    <>
      <Container className="mt-4 p-4 border rounded-3 " id="box12">
        <Row>
          <div className="d-flex justify-content-between">
            <h4>Formazione</h4>
            <div>
              <BsPlusLg className="me-4" />
              <BsPencil />
            </div>
          </div>
          <Col className="d-flex">
            <Row>
              <h5>EPICODE School</h5>
              <p>FullStack Web Developer</p>
              <p>01/2023 - 07/2023</p>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Formation;
