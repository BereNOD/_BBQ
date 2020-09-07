import React from 'react';
// import { ActionData } from '../../data'
import ActionItems from './ActionItems';

type Props = {}
type State = {}

class Action extends React.Component<Props, State> {

    render = () => (
        <div className="Action">
            <ActionItems
                period="Одна неделя"
                price={750}
            />
            <ActionItems
                period="Две недели"
                price={1250}
            />
            <ActionItems
                period="Месяц"
                price={2000}
            />

        </div>
    )
}

export default Action