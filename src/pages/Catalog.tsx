import * as React from 'react'
import { fetchCatalog } from '../actions/catalog'
import { connect } from 'react-redux'
import { ICatalogItem } from '../reducers/catalogTypes'
import { IStore } from '../reducers/types'

import Loader from '../components/Loader'

import Header from '../components/header'
import Navigation from '../components/Navigation'

import { withRouter } from 'react-router-dom'

interface IStateProps {
    catalog: ICatalogItem[]
}

interface IDispatchProps {
    fetchCatalog(slug?: string): void
}

interface IProps {
    match: {
        params: {
            slug?: string
        }
    }
}

class Catalog extends React.Component<IProps & IStateProps & IDispatchProps> {
    fetchCatalog = async () => await this.props.fetchCatalog(this.props.match.params.slug)

    render = () => {
        return (
            <Loader
                load={this.fetchCatalog}
                watchProps={this.props.match.params.slug}
            >
                {this.props.catalog.length === 0 ? 'Loading' : (
                    <>
                        <Header />
                        <Navigation />
                    </>
                )}


            </Loader>
        )
    }
}

const mapStateToProps = (state: IStore): IStateProps => ({
    catalog: state.catalog.list
})

const mapDispatchToProps: IDispatchProps = {
    fetchCatalog
}
// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Catalog))