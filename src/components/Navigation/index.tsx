import * as React from 'react'
import './styles.css'

import NavigationItem, { IProps as INavigationIProps } from './NavigationItem'

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

class Navigation extends React.Component {
    state = {
        list: []
    }

    componentDidMount = () => {
        fetch('/api/navigation')
            .then(response => response.json())
            .then(navigation => this.setState({ list: navigation }))
    }

    render = () => (
        <Container>
            <Row>
                <Col xs={12}>
                    <div className="NavBar">
                        {this.state.list.map(({ id, slug, title, src }: INavigationIProps, index: number) => (
                            <NavigationItem
                                key={`Navigation item ${slug} ${index}`}
                                id={id}
                                slug={slug}
                                title={title}
                                src={src}
                            />
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Navigation