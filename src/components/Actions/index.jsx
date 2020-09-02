import React from 'react';
import { ActionData } from '../../data'
import ActionItems from './ActionItems';



class Action extends React.Component {
    state = {
        actions: ActionData
    }
    render = () => (
        <div className="Action">
            {this.state.actions.map(action => (
                <ActionItems
                    period={action.period}
                    price={action.price}
                />
            ))}
        </div>
    )
}

export default Action