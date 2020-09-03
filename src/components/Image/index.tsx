import * as React from 'react'

interface Props {
  src: string
  alt: string
  width: number
  height: number
  classes?: string | string[]
}

class Image extends React.Component<Props> {

  render = () => {
    let classes = 'Image'

    if (this.props.classes) {
      if (typeof this.props.classes === 'string') {
        classes = `${classes} ${this.props.classes}`
      }

      if (Array.isArray(this.props.classes)) {
        classes = `${classes} ${this.props.classes.join(' ')}`
      }
    }

    return (
      <img
        {...this.props}
        src={this.props.src}
        alt={this.props.alt}
        width={this.props.width}
        height={this.props.height}
        className={classes}
      />
    )
  }
}

export default Image