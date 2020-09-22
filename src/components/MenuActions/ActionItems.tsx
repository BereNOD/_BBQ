import React from 'react';
import { connect } from 'react-redux'
import { ICartItem } from '../../reducers/cartTypes';

import { addToCart } from '../../actions/addToCart'

import './styles.css'

type DispatchProps = {
    addToCart: (item: ICartItem) => void
}

interface Props {
    period: string
    price: number
    id: number
}

class ActionItems extends React.Component<Props & DispatchProps> {
    handleClick = (): void => {
        this.props.addToCart({
            id: this.props.id,
            title: this.props.period,
            price: this.props.price
        })
    }

    render = () => (
        <div className="Action__box">
            <div className="ActionItem">
                <div className="Text__box">
                    <span className="Text__period">{this.props.period}</span>
                    <span className="Text__price">{this.props.price} грн.</span>
                </div>
                <button onClick={this.handleClick}>Заказать</button>
            </div>
        </div>
    )

}

const mapDispatchToProps = { addToCart }

export default connect(null, mapDispatchToProps)(ActionItems)
