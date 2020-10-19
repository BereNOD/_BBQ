import * as React from 'react'
import './styles.css'
import { connect } from 'react-redux'
import { IStore } from '../../reducers/types'
import { changeDeliveryType } from '../../actions/cart'

interface IStateProps {
    deliveryType: string
}

interface IDispatchProps {
    changeDeliveryType(deliveryType: string): void
}

class Delivery extends React.Component<IStateProps & IDispatchProps> {
    handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.props.changeDeliveryType(event.target.value)
    }

    render = () => (
        <div className="Delivery__wrapper">
            <div className="Delivery__title">Способ доставки</div>
            <select className="Delivery__select" name="delivery" id="delivery" onChange={this.handleChange}>
                <option value="pickup">Самовывоз</option>
                <option value="delivery">Доставка курьером</option>
            </select>
        </div>
    )
}

const mapStateToProps = (state: IStore) => ({
    deliveryType: state.cart.deliveryType
})

const mapDispatchToProps = {
    changeDeliveryType
}


export default connect(mapStateToProps, mapDispatchToProps)(Delivery)