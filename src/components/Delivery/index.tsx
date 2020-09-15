import * as React from 'react'
import './styles.css'

class Delivery extends React.Component {
    render = () => (
        <div className="Delivery__wrapper">
            <div className="Delivery__title">Способ доставки</div>
            <select className="Delivery__select" name="delivery" id="delivery">
                <option value="pickup">Самовывоз</option>
            </select>
        </div>
    )
}

export default Delivery