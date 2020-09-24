import * as React from 'react'
import { connect } from 'react-redux'
import NavigationItem from './NavigationItem'
import { IHeaderNavigationItem } from "../../reducers/navigationTypes"
import { fetchHeaderNavigation } from '../../actions/navigation'
import { IStore } from '../../reducers/types'

interface IStateProps {
  list: IStore['navigation']['headerNavigation']
}

interface IDispatchProps {
  fetchHeaderNavigation(): void
}

interface IProps {

}

class Navigation extends React.Component<IProps & IStateProps & IDispatchProps> {
  componentDidMount = () => {
    this.props.fetchHeaderNavigation()
  }

  render = () => (
    <div>
      {this.props.list.map(({ id, slug, title, src }: IHeaderNavigationItem, index: number) => (
        <NavigationItem
          key={`Navigation item ${slug} ${index}`}
          id={id}
          slug={slug}
          title={title}
          src={src}
        />
      ))}
    </div>
  )
}

const mapStateToProps = (state: IStore): IStateProps => ({
  list: state.navigation.headerNavigation
})

const mapDispatchToProps: IDispatchProps = {
  fetchHeaderNavigation
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)