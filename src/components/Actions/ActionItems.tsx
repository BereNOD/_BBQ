import React from 'react';
import Button from '../Buttons/index';
import './styles.css'

interface Props {
    period: string
    price: number
}

class ActionItems extends React.Component<Props> {
    render = () => null
    // <div className="Action__box">
    //     <div className="ActionItem">
    //         <div className="Text__box">
    //             <span className="Text__period">{this.props.period}</span>
    //             <span className="Text__price">{this.props.price} грн.</span>
    //         </div>
    //         <Button>Заказать</Button>
    //     </div>
    // </div>

}

export default ActionItems