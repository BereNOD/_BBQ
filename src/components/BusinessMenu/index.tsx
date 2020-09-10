import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux';

import './styles.css'

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Image from '../Image'
import Title from '../Title'
import Info from '../Info'
import Action from '../MenuActions'

import businessMenuPreview from '../../assets/images/bisness-menu-preview.png'

type Props = {
  dispatch: Dispatch
}
type State = {}


class BusinessMenu extends React.Component<Props, State> {
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_BISNESS_MENU',
      payload: 123
    })
  }
    render = () => {
      console.log('BusinessMenu props:', this.props);
      
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

// @ts-ignore
const mapStateToProps = (state) => ({
  bisnessMenu: state.menu.bisness
})

export default connect(mapStateToProps)(BusinessMenu)