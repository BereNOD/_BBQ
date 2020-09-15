import * as React from 'react'
import './styles.css'

class Quantity extends React.Component {
    render = () => (
        <div className="quantity__wrapper">
            <button className="changeNumber">-</button>
            <input type="number" className="quantity__input" />
            <button className="changeNumber">+</button>
        </div>
    )
}
export default Quantity