import * as React from 'react'
import './styles.css'

class DeliveryDay extends React.Component {
    render = () => (
        <div className="DeliveryDay__wrapper">
            <select className="DeliveryDay__select" name="today" id="today">
                <option value="">Сегодня</option>
            </select>
        </div>
    )
}

export default DeliveryDay