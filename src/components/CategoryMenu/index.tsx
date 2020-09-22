import * as React from 'react'

import './styles.css'

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Image from '../Image'
import Title from '../Title/index'
import Link from '../link/index'
import Buttons from '../Buttons/index'

import photo1 from '../../assets/images/CategoryMenu/photo1.png'
import photo2 from '../../assets/images/CategoryMenu/photo2.png'
import photo3 from '../../assets/images/CategoryMenu/photo3.png'
import photo4 from '../../assets/images/CategoryMenu/photo4.png'
import photo5 from '../../assets/images/CategoryMenu/photo5.png'
import photo6 from '../../assets/images/CategoryMenu/photo6.png'
import photo7 from '../../assets/images/CategoryMenu/photo7.png'

class CategoryMenu extends React.Component {

    render = () => (
        <Container>
            <Row>
                <Col xs={6}>
                    <div className="CategoryMenu">
                        <Image
                            src={photo1}
                            alt={'Dish photo'}
                            width={546}
                            height={225}
                        />
                        <Link>
                            <Title>
                                Бургеры
                            </Title>
                        </Link>
                    </div>
                    </Col>
                    <Col xs={3}>
                    <div className="CategoryMenu">
                        <Image
                            src={photo2}
                            alt={'Dish photo'}
                            width={255}
                            height={226}
                        />
                        <Link>
                            <Title>
                                Кухня
                            </Title>
                        </Link>
                    </div>
                    </Col>
                    <Col xs={3}>
                    <div className="CategoryMenu">
                        <Image
                            src={photo3}
                            alt={'Dish photo'}
                            width={255}
                            height={223}
                        />
                        <Link>
                            <Title>
                                Первые блюда
                            </Title>
                        </Link>
                    </div>
                    </Col>
                    <Col xs={3}>
                    <div className="CategoryMenu">
                        <Image
                            src={photo4}
                            alt={'Dish photo'}
                            width={255}
                            height={240}
                        />
                        <Link>
                            <Title>
                                Бизнес меню
                            </Title>
                        </Link>
                    </div>
                    </Col>
                    <Col xs={3}>
                        <div className="CategoryMenu">
                            <div className="CategoryMenuInner">
                                <Image
                                src={photo5}
                                alt={'Dish photo'}
                                width={255}
                                height={239}
                                />
                            <div className="buttonImage">
                                <button className="allDishes">
                                      Все блюда
                                </button>
                            </div>
                        </div>
                        <Link>
                            <Title>
                                Мангал  
                            </Title>
                        </Link>
                    </div>
                    </Col>
                    <Col xs={3}>
                    <div className="CategoryMenu">
                        <Image
                            src={photo6}
                            alt={'Dish photo'}
                            width={255}
                            height={235}
                        />
                        <Link>
                            <Title>
                                Десерты
                            </Title>
                        </Link>
                    </div>
                    </Col>
                    <Col xs={3}>
                    <div className="CategoryMenu">
                        <Image
                            src={photo7}
                            alt={'Dish photo'}
                            width={255}
                            height={245}
                        />
                        <Link>
                            <Title>
                                Напитки
                            </Title>
                        </Link>
                    </div>
                    </Col>
            </Row>
        </Container>
    )
}
export default CategoryMenu