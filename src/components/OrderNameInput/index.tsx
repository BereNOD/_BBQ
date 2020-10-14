import * as React from 'react'
import './styles.css'
import { connect } from 'react-redux'
import { IStore } from '../../reducers/types'
import { changeCartUsername } from '../../actions/cart'

interface IStateProps {
    name: string
}

interface IDispatchProps {
    changeCartUsername(username: string): void
}

class OrderNameInput extends React.Component<IStateProps & IDispatchProps> {
    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.changeCartUsername(event.target.value)
    }

    render = () => (
        <div className="NameInput__wrapper">
            <div className="NameInput__title">Имя</div>
            <input className="NameInput" type="text" placeholder="Введите свое имя" value={this.props.name} onChange={this.handleChange} />
        </div>
    )
}

const mapStateToProps = (state: IStore) => ({
    name: state.cart.name
})

const mapDispatchToProps = {
    changeCartUsername
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderNameInput)