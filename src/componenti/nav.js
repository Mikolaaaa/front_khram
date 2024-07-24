import React, { useState } from "react";
import "../App.css";
import { Button, Navbar, Nav, Container, Modal } from "react-bootstrap";
import { FaPhone, FaMapMarkerAlt, FaClock, FaDonate, FaCalendarAlt, FaPhotoVideo, FaChurch, FaHome} from "react-icons/fa";

function Navig() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const isAuthenticated = !!localStorage.getItem('access');

    const handleLogout = () => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        window.location.href = '/';
    };

    return (
        <div>
            <div className="info-section">
                <Container className="d-flex justify-content-around">
                    <span className="info-item"><FaPhone /><span className="info-text">+7(918)-424-93-95</span></span>
                    <span className="info-item"><FaMapMarkerAlt /><span className="info-text">Майкопский р-н, ст. ДАХОВСКАЯ, ул. Клубная, 16А</span></span>
                    <span className="info-item"><FaClock /><span className="info-text"><strong>СБ:</strong> 14:00 Панихида, 16:00 Вечерняя<br></br><strong>ВС:</strong> 7:30 Исповедь, 8:00 Литургия</span></span>
                </Container>
            </div>
            <div className="name d-flex justify-content-center align-items-center my-4">
                <div className="d-flex flex-row align-items-center" style={{ width: '100%' }}>
                    <img src={require("../images/georgiy.jpeg")} style={{ width: '20%', height: 'auto', marginRight: '20px' }} alt="georgiy" />
                    <div>
                        <b><i>
                            <div style={{ fontSize: '1em', color: "red"}}>
                                Храм Великомученика и Победоносца Георгия в станице Даховской
                            </div>
                        </i></b>
                    </div>
                </div>
            </div>
            <Navbar bg="light" expand="lg" className="mb-4">
                <Container>
                    <Navbar.Toggle/>

                    <Navbar.Collapse aria-valuetext={"vdfvd"}>
                        <Nav className="me-auto">
                            <Nav.Link href="/" className="text-dark d-flex align-items-center">
                                <FaHome className="me-2" /><span className="text-hidden-on-small"><b>Главная</b></span>
                            </Nav.Link>
                            <Nav.Link href="/donate" className="text-dark d-flex align-items-center">
                                <FaDonate className="me-2" /> <span className="text-hidden-on-small"><b>Пожертвования</b></span>
                            </Nav.Link>
                            <Nav.Link onClick={handleShow} className="text-dark d-flex align-items-center">
                                <FaPhone className="me-2" /> <span className="text-hidden-on-small"><b>Контакты</b></span>
                            </Nav.Link>
                            <Nav.Link onClick={handleShow2} className="text-dark d-flex align-items-center">
                                <FaCalendarAlt className="me-2" /> <span className="text-hidden-on-small"><b>Расписание богослужений</b></span>
                            </Nav.Link>
                            <Nav.Link href="/photo" className="text-dark d-flex align-items-center">
                                <FaPhotoVideo className="me-2" /> <span className="text-hidden-on-small"><b>Фотогалерея</b></span>
                            </Nav.Link>
                            <Nav.Link href="/building" className="text-dark d-flex align-items-center">
                                <FaChurch className="me-2" /> <span className="text-hidden-on-small"><b>Строительство нового храма</b></span>
                            </Nav.Link>
                             {isAuthenticated && (
                                <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
                             )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Контакты</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p style={{ color: 'black', fontSize: 23 }}><FaMapMarkerAlt /> <strong>Адрес:</strong> <br></br> Майкопский р-н, ст. ДАХОВСКАЯ, ул. Клубная, 16А</p>
                    <p style={{ color: 'black', fontSize: 23 }}><FaPhone /> <strong>Телефон:</strong> <br></br> +7(918)-424-93-95</p>
                </Modal.Body>
            </Modal>

            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>Расписание богослужений</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="service-schedule">
                        <div>
                          <h4 style={{ color: 'black', fontSize: 25}}><strong>Суббота</strong></h4>
                          <p style={{ color: 'black', fontSize: 25 }}>14:00 Панихида</p>
                          <p style={{ color: 'black', fontSize: 25 }}>16:00 Вечерняя</p>
                        </div>
                        <div>
                          <h4 style={{ color: 'black', fontSize: 25 }}><strong>Воскресенье</strong></h4>
                          <p style={{ color: 'black', fontSize: 25 }}>7:30 Исповедь</p>
                          <p style={{ color: 'black', fontSize: 25 }}>8:00 Литургия</p>
                        </div>
                        <p style={{ color: 'black', fontSize: 20 }}>
                          Узнать точно ли будет служба, можно по телефону:
                        </p>
                        <h5 style={{ color: 'black', fontSize: 25 }}>+7(918)-424-93-95</h5>
                      </div>
                </Modal.Body>
            </Modal>


        </div>
    );
}

export default Navig;
