import * as React from 'react'
import './styles.css'

interface Props {
    children: React.ReactNode
    classes?: string | string[]
}

class Price extends React.Component<Props> {
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
            <div {...this.props} className={classes}>
                {this.props.children} грн.
            </div>
        )
    }
}

export default Price
