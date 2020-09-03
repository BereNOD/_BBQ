import * as React from 'react'

import './styles.css'

// import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

// import Image from '../Image'
// import Title from '../Title'
// import Info from '../Info'
// import Action from '../Actions'

// import { InformationData } from '../../data'

// import photo1 from '../../assets/image/photo1.png'

class BusinessMenu extends React.Component {
    state = {
        information: null
    }
    componentDidMount() {
        fetch('/bisness-menu')
            .then(response => response.json())
            .then(data => {
                this.setState({ information: data });
            })
    }

    render = () => {
        if (!this.state.information) {
            return null
        }
        return (
            // <Container>
            //     <Row>
            //         <Col xs={12}>
            //             <article className="BusinessMenu">
            //                 <Image
            //                     src=this.state.information.image.src
            //                     alt={'Dish photo'}
            //                     width={268}
            //                     height={268}
            //                 />
            //                 <div className="Description__box">
            //                     <Title>Бизнес меню</Title>
            //                     <Info>
            //                         <p>
            //                             У нас можно заказать бизнес-ланч с доставкой в ​​офис. Для этого заранее свяжитесь с нами, чтобы мы успели позаботиться о вашем обеде.
            //                 </p>
            //                         <p>
            //                             Согласитесь, ведь стоит лишь человеку хорошо поесть в обеденное время – как он сразу же становится добрее и даже дела начинают идти в гору! Поэтому можно с уверенностью сказать, что бизнес-ланч – это еще и инвестиция в производительность.
            //                 </p>
            //                         <p>
            //                             Меню бизнес-ланчей меняется так, чтобы не надоедать нашим гостям и соответствовать сезону.
            //                 </p>
            //                     </Info>
            //                 </div>
            //                 <div className="Actions">
            //                     <Action />
            //                 </div>
            //             </article>
            //         </Col>
            //     </Row>
            // </Container>
        )
    }


}

export default BusinessMenu