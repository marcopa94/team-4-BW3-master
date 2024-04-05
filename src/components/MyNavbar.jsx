import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { HouseDoorFill } from "react-bootstrap-icons";
import { PeopleFill } from "react-bootstrap-icons";
import { BellFill } from "react-bootstrap-icons";
import { ChatLeftDotsFill } from "react-bootstrap-icons";
import { BriefcaseFill } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";
import { List } from "react-bootstrap-icons";
import Dropdown from "react-bootstrap/Dropdown";
import { Search } from "react-bootstrap-icons";
import { InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeJwt } from "../redux/actions";

const MyNavbar = () => {
  const dispatch = useDispatch();

  const jwtDomenico = useSelector(state => {
    return state.jwt.domenico;
  });

  const jwtAlbarella = useSelector(state => {
    return state.jwt.marcoAlbarella;
  });

  const jwtPala = useSelector(state => {
    return state.jwt.marcoPala;
  });

  return (
    <Navbar expand="lg" className=" p-0 mb-4" bg="light" id="mainNav">
      <Container>
        <div className="d-flex justify-content-between  div-nav ">
          <div className=" d-flex align-items-center ">
            <Navbar.Brand href="#home">
              <div className="d-flex">
                <div className="logo-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match"
                    width="44"
                    height="37"
                    focusable="false"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </div>
                <Form className="d-flex align-items-center">
                  <InputGroup>
                    <InputGroup.Text>
                      <Search />
                    </InputGroup.Text>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  </InputGroup>
                </Form>
              </div>
            </Navbar.Brand>
          </div>
          <div className="d-flex gap-5 align-items-center ms-4 ">
            <Link to={"/"} className="nav-link">
              <div className="d-flex flex-column align-items-center  div-icon">
                <div className="icons">
                  <HouseDoorFill />
                </div>
                <span>Home</span>
              </div>
            </Link>

            <div className="d-flex flex-column align-items-center div-icon">
              <div className="icons">
                <PeopleFill />
              </div>
              <span>Rete</span>
            </div>
            <div className="d-flex flex-column align-items-center div-icon">
              <div className="icons">
                <BriefcaseFill />
              </div>
              <span>Lavoro</span>
            </div>
            <div className="d-flex flex-column align-items-center div-icon">
              <div className="icons">
                <ChatLeftDotsFill />
              </div>
              <span>Messaggistica</span>
            </div>
            <div className="d-flex flex-column align-items-center div-icon">
              <div className="icons">
                <BellFill />
              </div>
              <span>Notifiche</span>
            </div>
            <div className="d-flex flex-column align-items-center div-icon">
              {/*  */}
              <Dropdown>
                <Dropdown.Toggle variant="outline" id="dropdown-basic" style={{ border: "black" }}>
                  <div className="icons">
                    <PersonCircle />
                  </div>
                  <span>
                    Profilo{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
                      />
                    </svg>
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Link to={"/profilo"} className="nav-link">
                    <Dropdown.Item href="#/action-1" onClick={() => dispatch(changeJwt(jwtDomenico))}>
                      Domenico Cicero
                    </Dropdown.Item>
                  </Link>
                  <Link to={"/profilo"} className="nav-link">
                    <Dropdown.Item href="#/action-2" onClick={() => dispatch(changeJwt(jwtPala))}>
                      Marco Pala
                    </Dropdown.Item>
                  </Link>
                  <Link to={"/profilo"} className="nav-link">
                    <Dropdown.Item href="#/action-3" onClick={() => dispatch(changeJwt(jwtAlbarella))}>
                      Marco Albarella
                    </Dropdown.Item>
                  </Link>
                </Dropdown.Menu>
              </Dropdown>

              {/* <div className="icons">
                <PersonCircle />
              </div>
              <span>Home</span> */}
            </div>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic" className="custom-dropdown-toggle">
                <div className="d-flex flex-column align-items-center div-icon">
                  <div className="icons">
                    <List />
                  </div>
                  <span>Per le aziende</span>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="  dropdown-center">
                <div className="row d-flex">
                  <div className="col-6 d-flex flex-column gap-4" id="colsx">
                    <Dropdown.Item href="#/action-1">
                      {" "}
                      <div className="d-flex align-items-center">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 40 40"
                            data-supported-dps="40x40"
                            width="40"
                            height="40"
                            focusable="false"
                          >
                            <defs>
                              <linearGradient
                                id="app-learning-@1-a"
                                x1="7.18"
                                y1="6.98"
                                x2="13.8"
                                y2="20.22"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0" stop-color="#33aada"></stop>
                                <stop offset="1" stop-color="#0091ca"></stop>
                              </linearGradient>
                              <linearGradient
                                id="app-learning-@1-b"
                                x1="12.96"
                                y1="-17.55"
                                x2="27.9"
                                y2="24.33"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0" stop-color="#665ed0"></stop>
                                <stop offset="1" stop-color="#0073b1"></stop>
                              </linearGradient>
                            </defs>
                            <path d="M20 30H8a1 1 0 01-1-1V11a1 1 0 011-1h12v20z" fill="url(#app-learning-@1-a)"></path>
                            <path
                              d="M20 10h12a1 1 0 011 1v18a1 1 0 01-1 1H20V10z"
                              fill="url(#app-learning-@1-b)"
                            ></path>
                            <path fill="#33aada" d="M9 19h8v2H9zM9 23h8v2H9zM9 15h8v2H9z"></path>
                            <path fill="#006097" d="M23 19h8v2h-8zM23 23h8v2h-8zM23 15h8v2h-8z"></path>
                            <path
                              d="M17.41 15.25l7.46 4.52a.27.27 0 010 .46l-7.46 4.52a.27.27 0 01-.41-.23v-9a.27.27 0 01.41-.27z"
                              fill="#fff"
                            ></path>
                          </svg>
                        </div>
                        <span>Learning</span>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      {" "}
                      <div className="d-flex align-items-center">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 40 40"
                            data-supported-dps="40x40"
                            width="40"
                            height="40"
                            focusable="false"
                          >
                            <defs>
                              <linearGradient
                                id="app-talent-insights-medium-a"
                                x1="34.05"
                                y1="44.47"
                                x2="13.67"
                                y2="19.5"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0" stop-color="#665ed0"></stop>
                                <stop offset="1" stop-color="#0073b1"></stop>
                              </linearGradient>
                            </defs>
                            <path d="M25 6H10a1 1 0 00-1 1v25a1 1 0 001 1h20a1 1 0 001-1V12z" fill="#caedff"></path>
                            <path fill="#65c3e8" d="M25 6v6h6l-6-6z"></path>
                            <path
                              d="M20 19a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v12h6zm8 11v-8h-5v9h4a1 1 0 001-1zm-17-5H9v5a1 1 0 001 1h4z"
                              fill="url(#app-talent-insights-medium-a)"
                            ></path>
                          </svg>
                        </div>
                        <span>Talent Insight</span>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      {" "}
                      <div className="d-flex align-items-center">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 40 40"
                            data-supported-dps="40x40"
                            width="40"
                            height="40"
                            focusable="false"
                          >
                            <defs>
                              <linearGradient
                                id="app-jobs-posting-@1-a"
                                x1="-6.68"
                                y1="-1"
                                x2="25.05"
                                y2="26.36"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0" stop-color="#665ed0"></stop>
                                <stop offset="1" stop-color="#0073b1"></stop>
                              </linearGradient>
                            </defs>
                            <path
                              fill="none"
                              stroke="#caedff"
                              stroke-miterlimit="10"
                              stroke-width="2"
                              d="M20 8.67l-4 6.66M20 8.67l4 6.66"
                            ></path>
                            <rect
                              x="8"
                              y="14"
                              width="24"
                              height="16"
                              rx="1"
                              ry="1"
                              fill="url(#app-jobs-posting-@1-a)"
                            ></rect>
                            <path fill="#65c3e8" d="M12 18h16v3H12z"></path>
                            <path fill="#33aada" d="M15 23h10v3H15z"></path>
                            <circle cx="20" cy="9" r="2" fill="#65c3e8"></circle>
                          </svg>
                        </div>
                        <span>Pubblica un'offerta di lavoro</span>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-4">
                      {" "}
                      <div className="d-flex align-items-center">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 40 40"
                            data-supported-dps="40x40"
                            width="40"
                            height="40"
                            focusable="false"
                          >
                            <defs>
                              <linearGradient
                                id="app-ads-@1-a"
                                x1="34.78"
                                y1="3.84"
                                x2="14.66"
                                y2="25.84"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0" stop-color="#665ed0"></stop>
                                <stop offset="1" stop-color="#0073b1"></stop>
                              </linearGradient>
                            </defs>
                            <g fill="url(#app-ads-@1-a)">
                              <path d="M20 11.88A8.13 8.13 0 1111.88 20 8.13 8.13 0 0120 11.88M20 9a11 11 0 1011 11A11 11 0 0020 9z"></path>
                              <circle cx="20" cy="20" r="4"></circle>
                            </g>
                            <circle cx="20" cy="20" r="2" transform="rotate(-45 20.002 19.995)" fill="#33aada"></circle>
                            <path fill="#33aada" d="M24.246 12.932l2.829 2.828-5.657 5.657-2.828-2.829z"></path>
                            <path
                              fill="#33aada"
                              d="M29.19 16.46l-4.95-.7-.7-4.95 4.94-4.95L29 11l5.14.52-4.95 4.94z"
                            ></path>
                          </svg>
                        </div>
                        <span>Pubblicizza</span>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-5">
                      {" "}
                      <div className="d-flex align-items-center">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 40 40"
                            data-supported-dps="40x40"
                            width="40"
                            height="40"
                            focusable="false"
                          >
                            <defs>
                              <linearGradient
                                id="app-sales-navigator-@1-a"
                                x1="40.53"
                                y1="-53.4"
                                x2="20.23"
                                y2="19.17"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0" stop-color="#665ed0"></stop>
                                <stop offset="1" stop-color="#0073b1"></stop>
                              </linearGradient>
                            </defs>
                            <circle cx="20" cy="20" r="14" fill="url(#app-sales-navigator-@1-a)"></circle>
                            <path
                              d="M17.17 17.17L27.42 12a.4.4 0 01.18 0 .39.39 0 01.4.39.42.42 0 010 .19l-5.17 10.25z"
                              fill="#fff"
                            ></path>
                            <path
                              d="M17.17 17.17L12 27.42a.42.42 0 000 .19.39.39 0 00.37.38.45.45 0 00.21 0l10.25-5.12z"
                              fill="#98d8f4"
                            ></path>
                            <circle cx="20" cy="20" r="4" fill="#fff"></circle>
                            <circle cx="20" cy="20" r="2" fill="#0073b1"></circle>
                          </svg>
                        </div>
                        <span>Vendi</span>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-6">
                      {" "}
                      <div className="d-flex align-items-center">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 40 40"
                            data-supported-dps="40x40"
                            width="40"
                            height="40"
                            focusable="false"
                          >
                            <defs>
                              <linearGradient
                                id="app-groups-@1-b"
                                x1="1.84"
                                y1="-24.59"
                                x2="20.66"
                                y2="25.05"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0" stop-color="#665ed0"></stop>
                                <stop offset="1" stop-color="#0073b1"></stop>
                              </linearGradient>
                              <clipPath id="app-groups-@1-a">
                                <path
                                  d="M18.17 9.15a11 11 0 00-7.76 16.23l-2 5.6a.47.47 0 00.63.59l5.21-2.23a11 11 0 103.92-20.19z"
                                  fill="none"
                                ></path>
                              </clipPath>
                            </defs>
                            <path
                              d="M18.17 9.15a11 11 0 00-7.76 16.23l-2 5.6a.47.47 0 00.63.59l5.21-2.23a11 11 0 103.92-20.19z"
                              fill="#caedff"
                            ></path>
                            <circle cx="29" cy="16" r="3" fill="#0091ca"></circle>
                            <circle cx="11" cy="16" r="3" fill="#0091ca"></circle>
                            <g clip-path="url(#app-groups-@1-a)">
                              <path
                                d="M20 18a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v16h6V20z"
                                fill="url(#app-groups-@1-b)"
                              ></path>
                              <path fill="#0091ca" d="M26 21h6v14h-6zM8 21h6v14H8z"></path>
                            </g>
                          </svg>
                        </div>
                        <span>Gruppi</span>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-7">
                      {" "}
                      <div className="d-flex align-items-center">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 40 40"
                            data-supported-dps="40x40"
                            width="40"
                            height="40"
                            focusable="false"
                          >
                            <circle cx="20" cy="12" r="4" fill="#0073b1"></circle>
                            <path
                              d="M31.88 13.46L16.17 29.17 18 31a1.37 1.37 0 002 0l14.71-14.71a1.13 1.13 0 00.29-.8.89.89 0 00-.29-.61l-1.41-1.42a1 1 0 00-1.42 0z"
                              fill="#0091ca"
                            ></path>
                            <path
                              d="M21.83 29.17L20 31a1.35 1.35 0 01-1 .4 1.36 1.36 0 01-1-.4l-8.71-8.71a1 1 0 010-1.41l1.41-1.41a1.07 1.07 0 01.76-.29.94.94 0 01.65.29z"
                              fill="#33aada"
                              opacity=".8"
                            ></path>
                            <path fill="#0073b1" d="M19 26.34l4-4V18h-6v6.34l2 2z"></path>
                          </svg>
                        </div>
                        <span>Market Place</span>
                      </div>
                    </Dropdown.Item>
                  </div>
                  {/* <div className="col-6 d-flex flex-column  " id="coldx">
                    <Dropdown.Item href="#/action-4">Opzione 4</Dropdown.Item>
                    <Dropdown.Item href="#/action-5">Opzione 5</Dropdown.Item>
                    <Dropdown.Item href="#/action-6">Opzione 6</Dropdown.Item>
                    <Dropdown.Item href="#/action-6">Opzione 6</Dropdown.Item>
                    <Dropdown.Item href="#/action-6">Opzione 6</Dropdown.Item>
                    <Dropdown.Item href="#/action-6">Opzione 6</Dropdown.Item>
                    <Dropdown.Item href="#/action-6">Opzione 6</Dropdown.Item>
                  </div> */}
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
