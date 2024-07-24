import './App.css';
import DocumentTitle from 'react-document-title';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Khram from "./pages/khram";
import Navig from "./componenti/nav";
import MainPage from "./pages/main";
import Photo from "./pages/photo";
import Donate from "./pages/donate";
import Build from "./pages/building";
import {Container} from "react-bootstrap";
import React from "react";
import {FaClock, FaMapMarkerAlt, FaPhone} from "react-icons/fa";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  return (
      <DocumentTitle title = 'Храм Даховская'>
        <div className="App">
            <BrowserRouter basename = "/">
                <Switch>
                    <Route exact path="/">
                        <Navig/>
                        <MainPage/>
                    </Route>
                    <Route exact path="/khram">
                        <Navig/>
                        <Khram/>
                    </Route>
                    <Route exact path="/photo">
                        <Navig/>
                        <Photo/>
                    </Route>
                    <Route exact path="/donate">
                        <Navig/>
                        <Donate/>
                    </Route>
                    <Route exact path="/building">
                        <Navig/>
                        <Build/>
                    </Route>
                    <Route exact path="/login">
                        <Navig/>
                        <Login/>
                    </Route>
                    <Route exact path="/okpijhuugbhidjsnkclmkmfenjrdfbhgwkersjnadcwesmdopwasedca">
                        <Navig/>
                        <Register/>
                    </Route>
                </Switch>
            </BrowserRouter>
            <div className="footer">
                <Container className="d-flex justify-content-around">
                    <span className="info-item"><FaPhone /><span className="info-text">+7(918)-424-93-95</span></span>
                    <span className="info-item"><FaMapMarkerAlt /><span className="info-text">Майкопский р-н, ст. ДАХОВСКАЯ, ул. Клубная, 16А</span></span>
                    <span className="info-item"><FaClock /><span className="info-text"><strong>СБ:</strong> 14:00 Панихида, 16:00 Вечерняя<br></br><strong>ВС:</strong> 7:30 Исповедь, 8:00 Литургия</span></span>
                </Container>
            </div>
        </div>
      </DocumentTitle>
  );
}

export default App;
