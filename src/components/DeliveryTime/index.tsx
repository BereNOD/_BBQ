import * as React from 'react'
import './styles.css'

class DeliveryTime extends React.Component {
    render = () => (
        <div className="DeliveryTime__wrapper">
            <select className="DeliveryTime__select" name="today" id="today">
                <option value="">19:35</option>
            </select>
        </div>
    )
}

export default DeliveryTime