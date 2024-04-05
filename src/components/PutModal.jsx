import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { FaPen } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

// const jwt =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBkMDFkMGY5NGY0YTAwMTkzNzkxNjUiLCJpYXQiOjE3MTIxMjg0NjQsImV4cCI6MTcxMzMzODA2NH0.rrAz-vY_R1pN6Zjj9pjzUoV5PUAFIOfYKwZONwGTEzo";

const PutModal = props => {
  const initialForm = {
    role: props.exp.role,
    image: props.exp.image,
    company: props.exp.company,
    startDate: props.exp.startDate,
    endDate: null,
    description: props.exp.description,
    area: props.exp.area,
  };
  const [show, setShow] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [upload, setUpload] = useState(false);
  const dispatch = useDispatch();

  const jwt = useSelector(state => {
    return state.profilo.jwtCurrent;
  });

  const userId = useSelector(state => {
    return state.profilo.user._id;
  });

  const handlePut = e => {
    e.preventDefault();
    fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${props.exp._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: jwt,
      },
      body: JSON.stringify(form),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel reperimento dei dati");
        }
      })
      .then(data => {
        setUpload(true);
        alert("Esperienza modificata con successo");
        handleClose();
      })
      .catch(err => {
        console.log("ERRORE", err);
      });
  };

  useEffect(() => {
    if (upload) {
      window.location.reload();
    }
    setUpload(false);
  }, [upload]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        <FaPen />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span className="text-secondary" style={{ fontSize: "10px" }}>
            * Indica che è obbligatorio
          </span>
          <Form onSubmit={handlePut}>
            <Form.Group className="my-3">
              <Form.Label>Role*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: Full Stack Web Developer"
                required
                onChange={e => {
                  setForm({
                    ...form,
                    role: e.target.value,
                  });
                }}
                value={form.role}
              />
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>Immagine</Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: https://......"
                onChange={e => {
                  setForm({
                    ...form,
                    image: e.target.value,
                  });
                }}
                value={form.image}
              />
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>Company*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: FizzBuzz"
                required
                onChange={e => {
                  setForm({
                    ...form,
                    company: e.target.value,
                  });
                }}
                value={form.company}
              />
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>Area*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: Milano"
                required
                onChange={e => {
                  setForm({
                    ...form,
                    area: e.target.value,
                  });
                }}
                value={form.area}
              />
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>Start Date*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: 2022-06-16"
                required
                onChange={e => {
                  setForm({
                    ...form,
                    startDate: e.target.value,
                  });
                }}
                value={form.startDate}
              />
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: 2023-06-16"
                onChange={e => {
                  setForm({
                    ...form,
                    endDate: e.target.value === "" ? null : e.target.value,
                  });
                }}
                value={form.endDate}
              />
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>Description*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: Implementing new featurese"
                onChange={e => {
                  setForm({
                    ...form,
                    description: e.target.value || null,
                  });
                }}
                value={form.description || null}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Salva
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="primary" onClick={handleClose}>
              Salva
            </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PutModal;
