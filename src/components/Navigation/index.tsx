import * as React from 'react'
import { connect } from 'react-redux'
import NavigationItem from './NavigationItem'
import { IHeaderNavigationItem } from '../../reducers/navigationTypes'
import { fetchHeaderNavigation, toggleLoader } from '../../actions/navigation'

import { IStore } from '../../reducers/types'
import './styles.css'

import loaderImage from '../../assets/svg/loaders/audio.svg'
import Loader from '../Loader'

interface IStateProps {
  list: IStore['navigation']['headerNavigation'],
  isFetching: boolean
}

interface IDispatchProps {
  fetchHeaderNavigation(): void,
  toggleLoader(): void,
}

interface IProps {

}

class Navigation extends React.Component<IProps & IStateProps & IDispatchProps> {
  componentDidMount = () => {
    this.props.fetchHeaderNavigation()
  }

  render = () => (
    <>
      {this.props.isFetching ?
        <Loader />
        : null
      }
      {
        this.props.list.map(({ id, slug, title, src }: IHeaderNavigationItem, index: number) => (
          <NavigationItem
            key={`Navigation item ${slug} ${index}`}
            id={id}
            slug={slug}
            title={title}
            src={src}
          />
        ))
      }
    </>
  )
}

const mapStateToProps = (state: IStore): IStateProps => ({
  list: state.navigation.headerNavigation,
  isFetching: state.navigation.isFetching
})

const mapDispatchToProps: IDispatchProps = {
  fetchHeaderNavigation,
  //@ts-ignore
  toggleLoader
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)