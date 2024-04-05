import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaEye } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineSettingsInputAntenna } from "react-icons/md";
import { HiUsers } from "react-icons/hi";

const RisorseProfilo = () => {
  return (
    <Container fluid className="px-4 pt-3 border border-secondary rounded my-3" id="box12">
      <Row>
        <Col xs={4}>
          <h3>Risorse</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <p className="text-secondary">
            <FaEye /> <span>Solo per te</span>
          </p>
        </Col>
      </Row>
      <Row className="border-bottom">
        <Col xs={12}>
          <h4>
            <MdOutlineSettingsInputAntenna /> Modalità creazione di contenuti
          </h4>
        </Col>
        <Col xs={12}>
          <p>Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi agli strumenti di creazione</p>
        </Col>
      </Row>
      <Row className="border-bottom pt-2">
        <Col xs={12}>
          <h4>
            <HiUsers /> La mia rete
          </h4>
        </Col>
        <Col xs={12}>
          <p>Salva e gestisci i tuoi collegamenti e interessi.</p>
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

export default RisorseProfilo;
