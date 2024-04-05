import { Col, Container, Row, ListGroup, Button } from "react-bootstrap";
import { FaEarthAmericas } from "react-icons/fa6";
import { GoKebabHorizontal } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { SlLike } from "react-icons/sl";
import { TfiCommentAlt } from "react-icons/tfi";
import { PiArrowsClockwiseFill } from "react-icons/pi";
import { BsFillSendFill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import PostModalPut from "./PostModalPut";
import { useSelector } from "react-redux";
import CommentList from "./CommentList";
import { useEffect, useState } from "react";
import AddComment from "./AddComment";
import { MdDelete } from "react-icons/md";

// const jwt =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBkMDFkMGY5NGY0YTAwMTkzNzkxNjUiLCJpYXQiOjE3MTIxMjg0NjQsImV4cCI6MTcxMzMzODA2NH0.rrAz-vY_R1pN6Zjj9pjzUoV5PUAFIOfYKwZONwGTEzo";

const jwtComment =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOWJiNjRjNTllYzAwMTk5MGQ2ZjYiLCJpYXQiOjE3MTIzMDIyODYsImV4cCI6MTcxMzUxMTg4Nn0.B0Z4Hq3CXyCas-EhkryGJGoZXl1NU07UfVHlwcBIY7M";

const PostCard = props => {
  const random = Math.floor(Math.random() * 500);

  const jwt = useSelector(state => {
    return state.profilo.jwtCurrent;
  });

  const [showAddComment, setShowAddComment] = useState(false);

  const postUserId = props.post.user._id;
  const userId = useSelector(state => {
    return state.profilo.user._id;
  });

  const commentsArray = useSelector(state => {
    return state.comment.content;
  });

  const deleteFetch = () => {
    if (postUserId === userId) {
      fetch(`https://striveschool-api.herokuapp.com/api/posts/${props.post._id}`, {
        method: "DELETE",
        headers: {
          Authorization: jwt,
        },
      })
        .then(response => {
          if (response.ok) {
            window.alert("cancellato con successo");
          } else {
            throw new Error("errore nella cancellazione");
          }
        })
        .catch(err => {
          console.log("ERRORE", err);
        });
    } else {
      alert("puoi eliminare solo i tuoi post");
    }
  };

  const deleteComment = commentId => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: jwtComment,
      },
    })
      .then(response => {
        if (response.ok) {
          window.alert("Commento eliminato con successo");
        } else {
          window.alert("Errore nell'eliminazione del commento");
          throw new Error("Problema nel reperimento dei dati");
        }
      })
      .catch(error => {
        console.log("ERRORE", error);
      });
  };

  return (
    <Container fluid className="px-4 py-3 my-3 bg-white" id="box14">
      <Row className="d-flex align-items-center" id="fotopost">
        <Col xs={2}>
          <img src={props.post.user.image} alt="profilo" style={{ width: "100%" }} id="fotopost" />
        </Col>
        <Col xs={6}>
          <h5>
            {props.post.user.name} {props.post.user.surname}
          </h5>
          <p className="text-secondary mb-0">{props.post.user.area}</p>
          <p className="text-secondary">
            {props.post.createdAt.substring(0, 10)} <FaEarthAmericas />
          </p>
        </Col>
        <Col xs={4} className="d-flex justify-content-end">
          <div className="d-flex align-items-center">
            <PostModalPut post={props.post} className="fs-6 me-3" />
            <IoMdClose className="fs-4" style={{ cursor: "pointer" }} onClick={deleteFetch} />
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h6>{props.post.user.title}</h6>
          <p>{props.post.text}</p>
          <span className="text-secondary">{props.post.user.bio}</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <img
            src="https://www.vigamusacademy.com/beta/wp-content/uploads/2021/06/linguaggio-di-programmazione.jpg"
            alt="profilo"
            className="w-100"
          />
        </Col>
      </Row>
      <Row className="d-flex align-items-center justify-content-between">
        <Col xs={5} className="d-flex ms-3 mt-2 align-items-center">
          <img src="/img/2.png" alt="profilo" className="imgut" />
          <span className="ms-2 text-secondary">{random} Likes</span>
        </Col>
        <Col xs={5} className="d-flex justify-content-end">
          <p className="mb-0 text-secondary mt-2">48 comments - 95 sharing</p>
        </Col>
      </Row>
      <Row className="mt-3 border-top pt-3">
        <Col xs={3}>
          <div className="d-flex justify-content-center align-items-center">
            <SlLike className="fs-2" />
            <span className="ms-3 text-secondary">Consiglia</span>
          </div>
        </Col>
        <Col xs={3}>
          <div
            className="d-flex justify-content-center align-items-center"
            onClick={() => setShowAddComment(!showAddComment)}
            style={{ cursor: "pointer" }}
          >
            <TfiCommentAlt className="fs-2" />
            <span className="ms-3 text-secondary">Commenta</span>
          </div>
        </Col>
        <Col xs={3}>
          <div className="d-flex justify-content-center align-items-center">
            <PiArrowsClockwiseFill className="fs-2" />
            <span className="ms-3 text-secondary">Diffondi </span>
          </div>
        </Col>
        <Col xs={3}>
          <div className="d-flex justify-content-center align-items-center">
            <BsFillSendFill className="fs-2" />
            <span className="ms-3 text-secondary">Invia</span>
          </div>
        </Col>
      </Row>
      {showAddComment && <AddComment elementId={props.post._id} />}
      <ListGroup className="lista1 mt-5 mb-3">
        {commentsArray
          .filter(comment => comment.elementId === props.post._id)
          .map((item, i) => {
            return (
              <div className="d-flex align-items-center py-2">
                <ListGroup.Item key={i} className="lista2 border-0">
                  <span className="fw-bold">{item.author}:</span> {item.comment}
                </ListGroup.Item>
                {(postUserId === userId || item.author === "domenico.cicero8@gmail.com") && (
                  <Button
                    variant="white"
                    type="button"
                    className="ms-auto text-danger"
                    onClick={() => deleteComment(item._id)}
                  >
                    <MdDelete />
                  </Button>
                )}
              </div>
            );
          })}
      </ListGroup>
    </Container>
  );
};

export default PostCard;
