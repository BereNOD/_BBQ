import * as React from 'react'
import { connect } from 'react-redux'
import { increase } from '../../actions/increase'

import { IStore } from '../../reducers/types'

import './styles.css'

interface DispatchProps {
    increase(quantity: number, id: number): void
}

type StateProps = {
    cart: any
}

interface Props {
    quantity: number
    id: number
}



class Quantity extends React.Component<Props & DispatchProps & StateProps> {
    handleClickAdd = () => {
        // console.log(this.props.quantity);
        this.props.increase(this.props.quantity, this.props.id)
    }

    render = () => (
        <div className="quantity__wrapper">
            <button className="changeNumber">-</button>
            <input type="number" className="quantity__input" value={this.props.quantity} />
            <button className="changeNumber" onClick={this.handleClickAdd}>+</button>
        </div>
    )
}
const mapStateToProps = (state: IStore): StateProps => ({
    cart: state.cart.list
})

const mapDispatchToProps = { increase }

export default connect(mapStateToProps, mapDispatchToProps)(Quantity)