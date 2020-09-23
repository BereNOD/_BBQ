import * as React from 'react'
import NavigationItem, {
  IProps as INavigationItemProps
} from './NavigationItem'

class Navigation extends React.Component {
  state = {
    list: []
  }

  componentDidMount = () => {
    fetch('/api/navigation')
      .then(response => response.json())
      .then(navigation => this.setState({ list: navigation }))
  }

  render = () => (
    <div>
      {this.state.list.map(({ id, slug, title, src }: INavigationItemProps, index: number) => (
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

export default Navigation