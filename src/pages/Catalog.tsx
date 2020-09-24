import * as React from 'react'
import { fetchCatalog } from '../actions/catalog'
import { connect } from 'react-redux'
import { ICatalogItem } from '../reducers/catalogTypes'
import { IStore } from '../reducers/types'

interface IStateProps {
    catalog: ICatalogItem[]
}

interface IDispatchProps {
    fetchCatalog(): void
}

interface IProps {

}

class Catalog extends React.Component<IProps & IStateProps & IDispatchProps> {
    componentDidMount = () => {
        this.props.fetchCatalog()
    }
    render = () => (
        <p>Users</p>
    )
}

const mapStateToProps = (state: IStore): IStateProps => ({
    catalog: state.catalog.list
})

const mapDispatchToProps: IDispatchProps = {
    fetchCatalog
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)