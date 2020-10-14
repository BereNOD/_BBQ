import * as React from 'react'
import isEqual from 'lodash/isEqual'

interface IProps {
    children: React.ReactNode
    load(): void
    watchProps: any
}

interface IState { }

class Loader extends React.Component<IProps, IState> {
    componentDidMount = () => {
        this.props.load()
    }

    componentDidUpdate = (prevProps: IProps) => {
        if (!isEqual(prevProps.watchProps, this.props.watchProps)) {
            this.props.load()
        }
    }

    render = () => this.props.children
}

export default Loader