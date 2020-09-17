import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux';

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


const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    deleteCartItem: (id: number) => dispatch({
        type: 'DELETE_FROM_CART',
        payload: id
    })

})

export default connect(null, mapDispatchToProps)(Delete)