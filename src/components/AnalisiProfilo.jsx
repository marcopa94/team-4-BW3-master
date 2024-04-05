import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaEye } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { GiHistogram } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";

const AnalisiProfilo = () => {
  return (
    <Container fluid className="px-4 pt-3 border border-secondary rounded my-3" id="box12">
      <Row>
        <Col xs={4}>
          <h3>Analisi</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <p className="text-secondary">
            <FaEye /> <span>Solo per te</span>
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={5}>
          <h4>
            <HiUsers /> 0 visualizzazioni del profilo
          </h4>
        </Col>
        <Col xs={5}>
          <h4>
            <GiHistogram /> 0 impressioni del post
          </h4>
        </Col>
      </Row>
      <Row>
        <Col xs={5}>
          <p>Aggiorna il tuo profilo per attrarre visitatori</p>
        </Col>
        <Col xs={5}>
          <p>Crea un post per aumentare l'interesse</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="border-0 border-top text-center">
          <Button className="bg-white text-secondary border-0">
            Mostra tutte le analisi <FaArrowRight />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AnalisiProfilo;
