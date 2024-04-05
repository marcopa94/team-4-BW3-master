import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { getFetchUser } from "../redux/actions";
import { Link } from "react-router-dom";

const PostSx = () => {
  const dispatch = useDispatch();

  const jwt = useSelector(state => {
    return state.profilo.jwtCurrent;
  });

  const user = useSelector(state => {
    return state.profilo.user;
  });

  useEffect(() => {
    if (user) {
      dispatch(getFetchUser(jwt));
    }
  }, []);
  return (
    <Container>
      <Row>
        <Col style={{ position: "relative" }}>
          <div id="box12" style={{ height: "540px" }}>
            <div className="head1">
              <img
                src="https://www.beverfood.com/wp-content/uploads/2019/05/ichnusa-2019.jpg"
                alt=""
                className="imguser2"
              />
              <div className="logo">
                <Link to={"/profilo"} className="nav-link">
                  <img
                    src={user.image}
                    alt=""
                    style={{ position: "absolute", top: "77px", left: "30px", cursor: "pointer" }}
                    id="imguser"
                  />
                </Link>
              </div>
              <div className="testosideprofile">
                <h3>{user.name}</h3>
                <p>
                  <span> {user.name}, scopri le opportunità </span>
                </p>
                <hr></hr>
              </div>
              <Row style={{ padding: "10px" }}>
                <Col xs={10}>
                  <p>Visitatori del profilo</p>
                  <p>Visitatori del profilo</p>
                </Col>
                <Col xs={2}>
                  <p>79</p>
                  <p>200</p>
                </Col>
              </Row>
              <hr></hr>
              <span>
                <p className="underline-text" style={{ textAlign: "center" }}>
                  Raggiungi i tuoi obbiettivi personali
                </p>
                <hr></hr>
                <Row style={{ padding: "5px" }}>
                  <Col xs={1}>
                    <img src="/icons/9.svg" alt="" />
                  </Col>
                  <Col xs={11} id="colfinal">
                    <p className="underline-text" style={{ textAlign: "center" }}>
                      I miei elementi
                    </p>
                  </Col>
                </Row>
              </span>{" "}
            </div>
          </div>
          <div id="box12" className="mt-3" style={{ overflow: "hidden" }}>
            <Row style={{ paddingLeft: "8px", paddingTop: "20px" }}>
              <Col>
                <p style={{ color: "#5192D4" }}>
                  <b>Gruppi</b>
                </p>
              </Col>
            </Row>
            <Row style={{ paddingLeft: "8px" }}>
              <Col xs={10}>
                <p style={{ color: "#5192D4" }}>
                  {" "}
                  <b>Eventi</b>
                </p>
              </Col>
              <Col xs={2}></Col>
            </Row>
            <Row style={{ paddingLeft: "8px" }}>
              <Col>
                <p style={{ color: "#5192D4" }}>
                  {" "}
                  <b>Hastag seguiti</b>
                </p>
              </Col>
            </Row>
            <div className="footcardhome">
              <h3 className="mostra">Mostra Tutto</h3>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PostSx;
