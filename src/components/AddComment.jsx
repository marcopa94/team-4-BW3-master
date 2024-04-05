import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const jwtComment =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOWJiNjRjNTllYzAwMTk5MGQ2ZjYiLCJpYXQiOjE3MTIzMDIyODYsImV4cCI6MTcxMzUxMTg4Nn0.B0Z4Hq3CXyCas-EhkryGJGoZXl1NU07UfVHlwcBIY7M";

const AddComment = props => {
  const initialStateForm = {
    comment: "",
    rate: "3",
    elementId: props.elementId,
  };

  const [form, setForm] = useState(initialStateForm);

  const addNewComment = e => {
    e.preventDefault();

    fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
        Authorization: jwtComment,
      },
    })
      .then(response => {
        if (response.ok) {
          window.alert("Commento aggiunto con successo!");
          setForm(initialStateForm);
        } else {
          window.alert("Errore, riprova più tardi!");
          throw new Error("Errore nel salvataggio del commento");
        }
      })
      .catch(error => {
        console.log("ERRORE", error);
      });
  };

  return (
    <Form className="my-3" onSubmit={addNewComment}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="add comment"
          required
          onChange={e => {
            setForm({ ...form, comment: e.target.value });
          }}
          value={form.comment}
        />
      </Form.Group>
      <Button className="mt-2" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default AddComment;
