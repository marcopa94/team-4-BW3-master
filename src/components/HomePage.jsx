import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import PostSx from "./PostSx";
import PostCentral from "./PostCentral";
import PostDx from "./PostDx";
import PostCard from "./PostCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFetchComments, getFetchPosts } from "../redux/actions";
import Footer from "./Footer";

const HomePage = () => {
  const postsArray = useSelector(state => {
    return state.post.content;
  });

  const jwt = useSelector(state => {
    return state.profilo.jwtCurrent;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFetchPosts(jwt));
    dispatch(getFetchComments());
  }, []);

  return (
    <>
      <MyNavbar />
      <Container>
        <Row>
          <Col xs={12} md={12} lg={3}>
            <PostSx />
          </Col>
          <Col xs={12} md={12} lg={6}>
            <PostCentral />
            {postsArray &&
              postsArray.map((post, i) => {
                return (
                  <div key={i}>
                    <PostCard post={post} />
                  </div>
                );
              })}
          </Col>
          <Col xs={12} md={12} lg={3}>
            <PostDx />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
