import "../App.css";
import { Button, Carousel, Container, Row, Col } from "react-bootstrap";

function Donate() {
    return (
        <Container className="my-5">
            <Row className="mb-4">
                <Col md={6} className="text-center">
                    <img className="img-fluid" style={{height: 450}} src={require("../images/201.jpg")} alt="Current state of the church"/>
                    <div className="mt-3">
                        <h4><strong>Храм на данный момент</strong></h4>
                    </div>
                </Col>
                <Col md={6} className="text-center">
                    <img className="img-fluid" style={{height: 450}} src={require("../images/200.jpg")} alt="Planned construction"/>
                    <div className="mt-3">
                        <h4><strong>Планируемое строительство</strong></h4>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="sluzhbi6 p-4">
                    <p style={{fontSize: 20}}>
                        В данный момент храм располагается в здании бывшего хозяйственного магазина. С благословения правящего архиерея архиепископа Тихона Майкопского и Адыгейского открыт сбор пожертвований на постройку нового храма, часовни на месте разрушенного деревянного храма и келейного корпуса, в котором с большой радостью будем ждать всех гостей.
                        Наши немногочисленные прихожане жертвуют по мере своих возможностей, но этого, к сожалению, не хватит на постройку нового храма.
                    </p>
                    <div className="text-center my-4">
                        <h3>Мы очень нуждаемся в вашей помощи!</h3>
                    </div>
                    <div className="my-4">
                        <h4>Банковские реквизиты:</h4>
                        <p style={{fontSize: 25}}>
                            <strong>4276 3020 0400 9287</strong><br/>
                            <strong>4274 3020 0522 8201</strong><br/>
                            <span>Эльбрус Георгиевич Х. (Настоятель храма)</span>
                        </p>
                    </div>
                    <p style={{fontSize: 20}}>
                        Все жертвователи поминаются на каждой Литургии настоятелем.
                        На сегодняшний день изготовлен и утвержден эскиз и проект будущего храма.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Donate;
