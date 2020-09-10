import * as React from 'react'
import './styles.css'

interface Props {
    children: React.ReactNode
    classes?: string | string[]
}

class Title extends React.Component<Props> {
    render = () => {
        let classes = 'Text'

        if (this.props.classes) {
            if (typeof this.props.classes === 'string') {
                classes = `${classes} ${this.props.classes}`
            }
            if (Array.isArray(this.props.classes)) {
                classes = `${classes} ${this.props.classes.join(' ')}`
            }
        }

        return (
            <span className={classes}>
                {this.props.children}
            </span>
        )
    }
}



export default Title