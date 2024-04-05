import { Container, Row, Col } from "react-bootstrap";
const PostDx = () => {
  return (
    <Container>
      <Row>
        {/* <Col xs={3}>
          <div id="box12" style={{ height: "500px" }}></div>
        </Col>
        <Col xs={6}>
          {" "}
          <div id="box12" style={{ height: "500px" }}></div>
        </Col> */}
        <Col>
          <div className="d-flex flex-column gap-3">
            <div id="box12">
              <div className="section-list">
                <h3>Linkedin Notizie</h3>
                <div className="lista">
                  <ul>
                    <li>
                      <a href="#">
                        <div>Quali confini tra vita e lavoro</div> <span>Notizie Principali</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div>Azimut avrà la sua banca digitale</div> <span>5 giorni fa</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div>Lamborghini ritocca il logo</div> <span>1 giorno fa</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div>Worldpay integra satispay</div> <span>16 ore fa</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div>Private equity in frenata</div> <span>5 giorni fa</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="custom-img">
              <img
                src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
                alt="imgLink"
              />
            </div>
            <div className=" d-flex flex-column gap-1 align-items-center">
              <div className="d-flex gap-3 footer-custom">
                <a href="">
                  <span>Informazioni</span>
                </a>
                <a href="">
                  <span>Accessibilità</span>
                </a>
              </div>
              <div className="d-flex gap-3 footer-custom">
                <a href="">
                  <span>Centro Assistenza</span>
                </a>
                <a href="">
                  <span>Privacy e condizioni</span>
                </a>
              </div>
              <div className=" footer-custom">
                <a href="">
                  <span>Opzioni per gli annunci pubblicitari</span>
                </a>
              </div>
              <div className="d-flex gap-3 footer-custom">
                <a href="">
                  <span>Pubblicità</span>
                </a>
                <a href="">
                  <span>Servizi alle aziende</span>
                </a>
              </div>
              <div className="d-flex gap-3 footer-custom">
                <a href="">
                  <span>Scarica l'app Linkedin</span>
                </a>
                <a href="">
                  <span>Altro</span>
                </a>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <img src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr" alt="logo-mini" />
              <p className="mb-0">Linkedin Corporation 2024</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default PostDx;
