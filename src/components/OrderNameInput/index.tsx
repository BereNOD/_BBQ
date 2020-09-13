import * as React from 'react'
import './styles.css'

class OrderNameInput extends React.Component {
    render = () => (
        <div className="NameInput__wrapper">
            <div className="NameInput__title">Имя</div>
            <input className="NameInput" type="text" placeholder="Введите свое имя" />
        </div>
    )
}

export default OrderNameInput