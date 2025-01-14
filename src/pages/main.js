import "../App.css";
import { Button, Carousel, Container, Row, Col } from "react-bootstrap";
import { DefaultPlayer as Video } from "react-html5video";
import dahdon from './dahdon.mp4';
import post from './200.jpg';
import { FaTelegram } from "react-icons/fa";
import React from "react";


function MainPage() {
  return (
    <Container style={{ marginTop: '0%'}}>
      <Row className="text-center mb-4 announcement-row">
          <Col>
              <div className="announcement">
                  <h2 style={{ color: "darkred", fontSize: 30 }}><strong>
                      Началось строительство нового храма, за его ходом вы можете
                      наблюдать во вкладке "Строительство нового храма"</strong>
                  </h2>
                  <h4>Также у храма появился Telegram-канал с новостями</h4>
                  <a href="https://t.me/dahovskayaGeorgiy" target="_blank" rel="noopener noreferrer" className="telegram-link">
                      <FaTelegram />
                      <span className="text-hidden-on-small" style={{ fontSize: 30, textAlign: "center", color: "black" }}>
                          <b>Telegram-канал</b>
                      </span>
                  </a>
              </div>
          </Col>
      </Row>
      <Row className="mb-4">
        <Col md={4}>
          <Video poster={post} style={{ width: '100%', height: 'auto', objectFit: 'cover' }}>
            <source src={dahdon} type="video/mp4" />
          </Video>
        </Col>
        <Col md={8}>
          <Carousel style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../images/2.jpg")}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../images/3.jpg")}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../images/1.jpg")}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row className="bg-light p-4 mb-4">
        <Col md={6}>
          <div className="service-schedule">
            <h3 style={{ color: 'darkred', fontSize: 30 }}><strong>Расписание богослужений:</strong></h3>
            <div>
              <h4 style={{ color: 'black', fontSize: 25 }}><strong>Суббота</strong></h4>
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
        </Col>
        <Col md={6} className="text-center">
          <h3 style={{ color: 'darkred', fontSize: 30 }}><strong>Проезд</strong></h3>
          <p style={{ color: 'black', fontSize: 25 }}>Адрес: Майкопский р-н, ст. ДАХОВСКАЯ, ул. Клубная, 16А</p>
          <iframe
            style={{ width: '100%', height: '300px' }}
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A718be2faf759369d95d6abe2d739bea59b07dbcf81449ca3779b88556d545691&amp;source=constructor"
            frameBorder="0"
          ></iframe>
          <Button
            variant="dark"
            href="https://yandex.ru/maps/11004/republic-of-adygea/house/klubnaya_ulitsa_16a/YEkYdAdhSEUHQFpufX5ycHtiZw==/?ll=40.201100%2C44.231714&z=16.87"
            className="mt-3"
          >
            Показать в картах
          </Button>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={6}>
          <h3 style={{ color: 'darkred' }}>История храма Георгия Победоносца</h3>
          <p style={{ fontSize: '18px', textAlign: 'justify' }}>
            Станица Даховская, Майкопского отдела основана в 1862 г. Расположена
            при слиянии рек Дах (с притоком Сахраем) и Белой, среди
            возвышенностей, покрытых лесом и кустарником. Главенствующей вершиной
            является г. Гут. Занятия жителей: лесопромышленность, скотоводство,
            хлебопашество (в очень незначительных размерах).
            <br /><br />
            Георгиевский храм построен в 1864 г. через 2 года после основания
            станицы при пособии от войска в 9000 р. Сделана церковь была из
            дубового бруса на фундаменте из каменных блоков. Имела форму ковчега
            (креста) с двумя приделами Состав причта: 1 священник и 1 псаломщик.
            <br /><br />
            К приходу приписано село Алексеевское (нынешнее с. Хамышки), населенное
            крестьянами-переселенцами из внутренних губерний. Расположено село к югу
            от станицы, в 18 верстах вверх по течению р. Белой. Население 2759 душ,
            из них в селе Алексеевском - 372, в хут. Сохрай - 178, раскольников- 9,
            «новоизраильцев»- 14. В сентябре 1920 года, во время казни казаков отрядом
            ЧОНа, священник Сергей Подлужный отказался покинуть прихожан станичного
            храма и был расстрелян вместе со всеми.
            <br /><br />
            По рассказам он, возложив на главу Псалтырь, всю дорогу до Расстрельной
            поляны пел псалмы, ободряя и утешая своих духовных чад. Красноармейцы
            отталкивали его, пытаясь прогнать, говорили что он свободен и может
            уходить, но он по слову Господнему остался до конца. В середине тридцатых
            годов церковь закрыли, сделав из неё склад.
            <br /><br />
            Во время оккупации станицы немцами служба в храме восстановилась, но после
            войны храм переоборудовали в клуб. Так и стоял храм без креста до конца 80-х,
            пока в1990 г. глава сельсовета Рыльцев В.И. не принял решение разобрать его
            под предлогом аварийности, хотя нужно было всего лишь починить крышу. Местные
            активисты-коммунисты Кудиновы не упустили возможности поживиться. Безбожные
            сыновья и внуки тех, кто расстреливал казаков, сделали из крепчайших дубовых
            досок растащенного храма свои свинарники, а остальное стопили в печках.
            <br /><br />
            В наши дни по благословению владыки Пантелеимона в станице открылся
            новый приход. Оборудовали здание бывшего сельповского магазина и люди
            своими усилиями совершили чудо: в станице Даховской теперь снова есть
            Свято-Георгиевский храм!
          </p>
        </Col>
        <Col md={6}>
          <h3 style={{ color: 'darkred' }}>Георгий Победоносец</h3>
          <p style={{ fontSize: '18px', textAlign: 'justify' }}>
            Георгий Победоносец — святой, великомученик, один из самых почитаемых
            в России святых. Согласно греческим сказаниям, Георгий родился в III
            веке в Бейруте у подножия Ливанских гор. Его родителями были воин
            Геронтий и Полихрония, владелица богатых земель. Когда отец умер,
            семья стала жить в Лидде. Там Георгий поступил на службу. Все знали
            его как доблестного воина, умного и храброго.
            <br /><br />
            Он стал тысяченачальником. Его очень любил император Диоклетиан.
            Когда юноше было 20 лет, его мать умерла. Он получил богатое наследство
            и решил служить при дворе, чтобы иметь в обществе высокое положение.
            В это время начались гонения христиан. В Никомидии Георгий отдал все
            свои деньги бедным. Перед лицом императора он объявил себя христианином.
            Император приказал его арестовать. Георгия подвергли пыткам.
            <br /><br />
            Когда Георгия толкали в темницу железными копьями, одно из них сломалось,
            словно спичка. Тогда его привязали к столбу, и на грудь ему поместили
            тяжелый камень. На второй день его пытали колесом, мечами и ножами.
            Георгий лежал бездыханный, но явился ангел, которого он приветствовал
            по-военному, и все поняли, что он ожил, и все раны заживились. В яме с
            негашеной известью Георгий остался жив. На 4 день ему переломали кости
            на руках и ногах, а на другой день они были целы. На ноги Георгию надели
            раскаленные сапоги из железа. Он молился всю ночь, и утром перед императором
            стоял невредим.
            <br /><br />
            Он был побит плетьми так, что со спины слезла кожа. Но утром он снова был
            цел и невредим. В 7 день ему приготовили снадобья. Одна чаша должна была
            лишить его рассудка, другая — умертвить. Но это не подействовало на Георгия.
            После пыток он воскресил умершего человека и оживил вола. Все это так
            подействовала на многих людей, что они решили тоже стать христианами.
            На 8 день его уговаривали отречься от Христа, но он остался верен
            христианству. Тогда Диоклетиан решил казнить его.
            <br /><br />
            В ночь перед казнью Георгию приснился Спаситель с золотым венцом на голове.
            Он сказал, что Георгия ждет Рай. Тот позвал слугу, передал ему сказанные
            слова и попросил похоронить его в Палестине. Диоклетиан спустился в темницу,
            чтобы уговорит в последний раз Георгия отказаться от Христа. Тот попросил
            посетить храм Апполлона. После речи в храме и крестного знамения, которым
            он озарил себя и статую, бес, который жил в статуе, объявил себя падшим
            ангелом, и все идолы храма рухнули. Разозленные жрецы стали бить Георгия.
            Внезапно вбежала жена императора, которая на коленях просила святого простить
            мужу его грехи. В этот момент она стала христианкой. Император приказал убить обоих.
            <br /><br />
            В этот день мученическую смерть приняли Георгий и Александра
            Римская, царица. Георгию было всего около 28 лет.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default MainPage;
