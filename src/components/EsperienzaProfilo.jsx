import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaPen } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";
import { BsBraces, BsFillBriefcaseFill } from "react-icons/bs";
import { IoCalendarNumber } from "react-icons/io5";
import ExpModal from "./ExpModal";
import { useEffect } from "react";
import { getFetchExp, deleteExp } from "../redux/actions";
import CardExp from "./CardExp";
import { MdDelete } from "react-icons/md";
import PutModal from "./PutModal";

// const jwt =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBkMDFkMGY5NGY0YTAwMTkzNzkxNjUiLCJpYXQiOjE3MTIxMjg0NjQsImV4cCI6MTcxMzMzODA2NH0.rrAz-vY_R1pN6Zjj9pjzUoV5PUAFIOfYKwZONwGTEzo";

const EsperienzaProfilo = () => {
  const dispatch = useDispatch();

  const jwt = useSelector(state => {
    return state.profilo.jwtCurrent;
  });

  const expArray = useSelector(state => {
    return state.exp.content;
  });

  const user = useSelector(state => {
    return state.profilo.user;
  });

  const userId = useSelector(state => {
    return state.profilo.user._id;
  });

  const fetchExperiences = () => {
    dispatch(getFetchExp(userId, jwt));
  };

  const deleteFetch = expId => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`, {
      method: "DELETE",
      headers: {
        Authorization: jwt,
      },
    })
      .then(response => {
        if (response.ok) {
          dispatch(deleteExp(expId));
          window.alert("cancellato con successo");
        } else {
          throw new Error("errore nella cancellazione");
        }
      })
      .catch(err => {
        console.log("ERRORE", err);
      });
  };

  // const putFetch = () => {};

  useEffect(() => {
    if (userId) {
      // dispatch(getFetchExp(userId));
      fetchExperiences();
    }
  }, [dispatch, userId]);

  return (
    <Container fluid className="px-4 pt-3 border border-secondary rounded my-3" id="box12">
      <Row>
        <Col className="d-flex justify-content-between mb-4">
          <h3>Esperienza</h3>
          <div>
            <Dropdown className="d-inline-block">
              {/* <Dropdown.Toggle variant="white" id="dropdown-basic"> */}
              {/* <FaPlus className="fs-4 me-5" /> */}
              <ExpModal />
              {/* </Dropdown.Toggle> */}

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <BsFillBriefcaseFill className="me-2" />
                  Aggiungi posizione lavorativa
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <IoCalendarNumber className="me-1" /> Aggiungi pausa lavorativa
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <FaPen className="fs-4" />
          </div>
        </Col>
      </Row>

      {expArray.map((exp, i) => {
        return (
          <div key={i} className="d-flex align-items-center">
            <CardExp exp={exp} />
            <Button variant="danger" type="button" className="me-2" onClick={() => deleteFetch(exp._id)}>
              <MdDelete />
            </Button>
            <PutModal exp={exp} />
          </div>
        );
      })}

      {/*       -----------------------------------------inizio part dinamica---------------------------------- */}
      {/* <Row>
        <Col xs={1}>
          <img src="./img/7.jpeg" alt="" style={{ width: "70px" }}></img>{" "}
        </Col>
        <Col xs={11} style={{ paddingLeft: "30px" }}>
          <h3>Prova2</h3>
          <p className="mb-0">esperienza0</p>
          <span>esperienza 1</span>
          <br></br>
          <span>esperienza 1</span>

          <h5 className="pt-3">prova2</h5>
          <hr></hr>
        </Col>
      </Row>
      <Row>
        <Col xs={1}>
          <img src="./img/7.jpeg" alt="" style={{ width: "70px" }}></img>{" "}
        </Col>
        <Col xs={11} style={{ paddingLeft: "30px" }}>
          <h3>Prova2</h3>
          <p className="mb-0">esperienza0</p>
          <span>esperienza 1</span>
          <br></br>
          <span>esperienza 1</span>

          <h5 className="pt-3">prova2</h5>
          <hr></hr>
        </Col>
      </Row> */}

      {/*       -----------------------------------------fine part dinamica---------------------------------- */}
    </Container>
  );
};

export default EsperienzaProfilo;
