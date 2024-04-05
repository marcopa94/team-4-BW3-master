import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaImage } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getFetchUser } from "../redux/actions";

// const jwt =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBkMDFkMGY5NGY0YTAwMTkzNzkxNjUiLCJpYXQiOjE3MTIxMjg0NjQsImV4cCI6MTcxMzMzODA2NH0.rrAz-vY_R1pN6Zjj9pjzUoV5PUAFIOfYKwZONwGTEzo";

const PostCentral = () => {
  const initialForm = {
    text: "",
  };
  const dispatch = useDispatch();

  const jwt = useSelector(state => {
    return state.profilo.jwtCurrent;
  });

  const [form, setForm] = useState(initialForm);

  const user = useSelector(state => {
    return state.profilo.user;
  });

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`https://striveschool-api.herokuapp.com/api/posts/`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
        Authorization: jwt,
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          window.alert("Errore, riprova più tardi!");
          throw new Error("Errore nel salvataggio delle esperienze");
        }
      })
      .then(data => {
        // Dispatch dell'azione addExp per aggiungere l'esperienza allo stato Redux
        window.alert("Post pubblicato con successo!");
        setForm(initialForm);
      })
      .catch(err => {
        console.error("ERRORE!", err);
      });
  };

  useEffect(() => {
    if (user) {
      dispatch(getFetchUser(jwt));
    }
  }, []);

  return (
    <Container className="bg-white rounded" id="box14">
      <Row className="d-flex align-items-center mt-2 mb-4 pt-3">
        <Col xs={2} style={{ marginTop: "-45px" }}>
          <div id="fotopost">
            <img src={user.image} alt="profilo" style={{ width: "100%" }} id="fotopost" />
          </div>
        </Col>
        <Col xs={10}>
          <Form className="text-end" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" id="form2">
              <Form.Control
                type="text"
                placeholder="Avvia un post"
                className="rounded-50"
                style={{ height: "46px" }}
                onChange={e => {
                  setForm({
                    ...form,
                    text: e.target.value,
                  });
                }}
                value={form.text}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-25">
              Pubblica
            </Button>
          </Form>
        </Col>
      </Row>
      <Row id="align">
        <Col xs={5}>
          <div className="d-flex align-items-center justify-content-center">
            <span className="me-3 text-primary ">
              <FaImage />
            </span>
            <p className="mb-0 text-secondary ">Contenuti multimediali</p>
          </div>
        </Col>
        <Col xs={2}>
          <div className="d-flex align-items-center justify-content-center">
            <span className="me-3 text-warning ">
              <FaCalendarAlt />
            </span>
            <p className="mb-0 text-secondary ">Evento</p>
          </div>
        </Col>
        <Col xs={5}>
          <div className="d-flex align-items-center justify-content-center">
            <span className="me-3 text-danger fs-3">
              <MdArticle />
            </span>
            <p className="mb-0 text-secondary">Scrivi un articolo</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PostCentral;
