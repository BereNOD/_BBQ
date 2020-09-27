import * as React from 'react'
import { connect } from 'react-redux'

import { deleteCartItem } from '../../actions/cart'

import './styles.css'

interface DispatchProps {
    deleteCartItem(id: number): void
}

interface Props {
    id: number
}

class Delete extends React.Component<Props & DispatchProps> {
    handleClick = () => {
        this.props.deleteCartItem(this.props.id)

    }

    render = () => (
        <button className="Delete__button" onClick={this.handleClick} />
    )
}


const mapDispatchToProps = { deleteCartItem }

export default connect(null, mapDispatchToProps)(Delete)