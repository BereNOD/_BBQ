import * as React from 'react'

import './styles.css'

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import Image from '../Image'
import sampleLunchBackground from '../../assets/images/sample-lunch-background.jpg'

import Title from '../Title'
import Text from '../text'
import Button from '../Buttons'


type Props = {}

class SampleLunch extends React.Component<Props> {
    render = () => (
        <Container>
            <Row>
                <Col xs={12}>
                    <article className="SampleLunch">
                        <Image
                            src={sampleLunchBackground}
                            alt="Dish photo"
                            width={1600}
                            height={412}
                        />
                        <div className="SampleLunch__textWrapper">
                            <Title classes="SampleLunch__title">Заказать пробный обед</Title>
                            <div className="SampleLunch__textContainer">
                                <Text classes="SampleLunch__text">Хотите попробовать наши обеды?</Text>
                                <Text classes="SampleLunch__text">Закажите пробный бизнес ланч на один день!</Text>
                            </div>
                            <Button>Заказать</Button>
                        </div>
                    </article>
                </Col>
            </Row>
        </Container>
    )

}

export default SampleLunch