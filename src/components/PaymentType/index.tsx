import * as React from 'react'
import './styles.css'
import { connect } from 'react-redux'
import { IStore } from '../../reducers/types'
import { changePaymentType } from '../../actions/cart'


interface IStateToProps {
    paymentType: string
}

interface IDispatchProps {
    changePaymentType(paymentType: string): void
}

class PaymentType extends React.Component<IStateToProps & IDispatchProps> {

    handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.props.changePaymentType(event.target.value)
    }
    render = () => (
        <div className="PaymentType__wrapper">
            <div className="PaymentType__title">Способ оплаты</div>
            <select className="PaymentType__select" name="payment" id="payment" onChange={this.handleChange}>
                <option value="cash">Наличными</option>
                <option value="card">Банковской картой</option>
            </select>
        </div>
    )
}

const mapStateToProps = (state: IStore) => ({
    paymentType: state.cart.paymentType
})

const mapDispatchToProps = {
    changePaymentType
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentType)