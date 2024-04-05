import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { addExp } from "../redux/actions";
import { useDispatch } from "react-redux";

// const jwt =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBkMDFkMGY5NGY0YTAwMTkzNzkxNjUiLCJpYXQiOjE3MTIxMjg0NjQsImV4cCI6MTcxMzMzODA2NH0.rrAz-vY_R1pN6Zjj9pjzUoV5PUAFIOfYKwZONwGTEzo";

const initialForm = {
  role: "",
  image: "",
  company: "",
  startDate: "",
  endDate: null,
  description: "",
  area: "",
};

const ExpModal = () => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState(initialForm);
  const dispatch = useDispatch();

  const jwt = useSelector(state => {
    return state.profilo.jwtCurrent;
  });

  const userId = useSelector(state => {
    return state.profilo.user._id;
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
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
        dispatch(addExp(data));
        window.alert("Esperienza salvata con successo!");
        setForm(initialForm);
        handleClose();
      })
      .catch(err => {
        console.error("ERRORE!", err);
      });
  };

  return (
    <>
      <Button variant="white" onClick={handleShow}>
        <FaPlus />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span className="text-secondary" style={{ fontSize: "10px" }}>
            * Indica che è obbligatorio
          </span>
          <Form onSubmit={handleSubmit}>
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

export default ExpModal;
