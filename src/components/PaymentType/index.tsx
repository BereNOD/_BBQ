import * as React from 'react'
import './styles.css'

class PaymentType extends React.Component {
    render = () => (
        <div className="PaymentType__wrapper">
            <div className="PaymentType__title">Способ оплаты</div>
            <select className="PaymentType__select" name="payment" id="payment">
                <option value="cash">Наличными</option>
            </select>
        </div>
    )
}

export default PaymentType