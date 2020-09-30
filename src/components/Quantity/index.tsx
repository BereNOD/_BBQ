import * as React from 'react'
import { connect } from 'react-redux'
import { changeCartItemQuantity } from '../../actions/cart'

import { IStore } from '../../reducers/types'

import './styles.css'

interface DispatchProps {
    changeCartItemQuantity(id: number, quantity: number | string): void
}

type StateProps = {
    cart: any
}

interface Props {
    quantity: number
    id: number
}



class Quantity extends React.Component<Props & DispatchProps & StateProps> {
    handleIncrease = () => {
        // console.log(this.props.quantity);
        this.props.changeCartItemQuantity(this.props.id, this.props.quantity + 1)
    }
    handleDecrease = () => {
        // console.log(this.props.quantity);
        this.props.changeCartItemQuantity(this.props.id, this.props.quantity - 1)
    }
    valueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.changeCartItemQuantity(this.props.id, e.target.value)
    }

    render = () => (
        <div className="quantity__wrapper">
            <button className="changeNumber" onClick={this.handleDecrease}>-</button>
            <input type="text" className="quantity__input" onChange={this.valueChange} value={this.props.quantity} />
            <button className="changeNumber" onClick={this.handleIncrease}>+</button>
        </div>
    )
}
const mapStateToProps = (state: IStore): StateProps => ({
    cart: state.cart.list
})

const mapDispatchToProps = { changeCartItemQuantity }

export default connect(mapStateToProps, mapDispatchToProps)(Quantity)