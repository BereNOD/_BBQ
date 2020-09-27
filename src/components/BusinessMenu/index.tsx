import * as React from 'react'
import { connect } from 'react-redux'

import { fetchBisnessMenu } from '../../actions/bisnessMenu'

import './styles.css'

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import { IStore } from '../../reducers/types'

import Image from '../Image'
import Title from '../Title'
import Info from '../Info'
import Action from '../MenuActions'

import businessMenuPreview from '../../assets/images/bisness-menu-preview.png'

type StateProps = {
    bisnessMenu: any
}
type DispatchProps = {
    fetchBisnessMenu: (payload: IStore['menu']['bisness']) => void
}
type Props = {}
type State = {}


class BusinessMenu extends React.Component<Props & StateProps & DispatchProps, State> {
    componentDidMount() {
        fetch('/api/navigation')
            .then(response => response.json())
            .then(data => {
                this.props.fetchBisnessMenu(data)
            })
    }

    render = () => {
        return (
            <Container>
                <Row>
                    <Col xs={12}>
                        <article className="BusinessMenu">
                            <Image
                                src={businessMenuPreview}
                                alt="Dish photo"
                                width={268}
                                height={268}
                            />
                            <div className="Description__box">
                                <Title>Бизнес меню</Title>
                                <Info>
                                    У нас можно заказать бизнес-ланч с доставкой в ​​офис. Для этого заранее свяжитесь с нами, чтобы мы успели позаботиться о вашем обеде.
                            </Info>
                                <Info>
                                    Согласитесь, ведь стоит лишь человеку хорошо поесть в обеденное время – как он сразу же становится добрее и даже дела начинают идти в гору! Поэтому можно с уверенностью сказать, что бизнес-ланч – это еще и инвестиция в производительность.
                            </Info>
                                <Info>
                                    Меню бизнес-ланчей меняется так, чтобы не надоедать нашим гостям и соответствовать сезону.
                            </Info>

                            </div>
                            <div className="Actions">
                                <Action />
                            </div>
                        </article>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state: IStore): StateProps => ({
    bisnessMenu: state.menu.bisness
})

const mapDispatchToProps = {
    fetchBisnessMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessMenu)
