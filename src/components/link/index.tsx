import * as React from 'react'

import './styles.scss'

interface Props {
  href: string
  classes?: string | string[]
  children: React.ReactNode
}

class Link extends React.Component<Props> {
  static defaultProps = {
    href: '#'
  }

  render = () => {
    let classes = 'Link'
    
    if (this.props.classes) {
      if (typeof this.props.classes === 'string') {
        classes = `${classes} ${this.props.classes}`
      }

      if (Array.isArray(this.props.classes)) {
        classes = `${classes} ${this.props.classes.join(' ')}`
      }
    }

    return (
      <a
        className={classes}
        href={this.props.href}
      >
        {this.props.children}
      </a>
    )
  }
}

export default Link