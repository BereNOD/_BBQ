import * as React from 'react'
import './styles.css'

class OrderPhoneInput extends React.Component {
    render = () => (
        <div className="PhoneInput__wrapper">
            <div className="PhoneInput__title">Телефон</div>
            <input className="PhoneInput" type="number" placeholder="(099) 123 45 67" />
        </div>
    )
}

export default OrderPhoneInput