import * as React from 'react'
import './styles.css'
import { connect } from 'react-redux'
import { IStore } from '../../reducers/types'
import { changeCartUserPhone } from '../../actions/cart'

interface IStateProps {
    phone: string
}

interface IDispatchProps {
    changeCartUserPhone(userPhone: string): void
}

class OrderPhoneInput extends React.Component<IStateProps & IDispatchProps> {
    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.changeCartUserPhone(event.target.value)
    }

    render = () => (
        <div className="PhoneInput__wrapper">
            <div className="PhoneInput__title">Телефон</div>
            <input className="PhoneInput" type="number" placeholder="(099) 123 45 67" value={this.props.phone} onChange={this.handleChange} />
        </div>
    )
}

const mapStateToProps = (state: IStore) => ({
    phone: state.cart.phone
})

const mapDispatchToProps = {
    changeCartUserPhone
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderPhoneInput)