import React from 'react';
// import { ActionData } from '../../data'
// import ActionItems from './ActionItems';

interface State {
    actions?: string | number
}

class Action extends React.Component<{}, State> {
    state = {
        // actions: []
    }
    render = () => null
    // <div className="Action">
    //     {this.state.actions.map(action => (
    //         <ActionItems
    //             period={action.period}
    //             price={action.price}
    //         />
    //     ))}
    // </div>

}

export default Action