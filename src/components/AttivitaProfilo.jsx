import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaPen } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const AttivitaProfilo = () => {
  return (
    <Container fluid className="px-4 pt-3 border border-secondary rounded my-3" id="box12">
      <Row>
        <Col className="d-flex justify-content-between mb-4">
          <h3>Attività</h3>
          <div>
            <Button className="me-3 bg-white text-primary fw-semibold rounded-50">Crea un post</Button>
            <FaPen className="fs-4" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>non hai ancora pubblicato nulla</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>I post che condividi appariranno qui</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="border-0 border-top text-center">
          <Button className="bg-white text-secondary border-0">
            Mostra tutte le risorse <FaArrowRight />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AttivitaProfilo;
