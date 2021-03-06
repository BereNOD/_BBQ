import React from 'react';
// import { ActionData } from '../../data'
import ActionItems from './ActionItems';

type Props = {}
type State = {}

class Action extends React.Component<Props, State> {

    render = () => (
        <div className="Action">
            <ActionItems
                id={1}
                period="Одна неделя"
                price={750}
                quantity={0}
            />
            <ActionItems
                id={2}
                period="Две недели"
                price={1250}
                quantity={0}
            />
            <ActionItems
                id={3}
                period="Месяц"
                price={2000}
                quantity={0}
            />

        </div>
    )
}

export default Action