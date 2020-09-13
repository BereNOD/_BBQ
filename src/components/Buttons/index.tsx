import * as React from 'react';
import './styles.css'

interface Props {
    children: React.ReactNode
    classes?: string | string[]
}

class Button extends React.Component<Props> {
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
            <button
                className={classes}
                type="button"
            >
                {this.props.children}
            </button>
        )
    }

}
// <button
//     className="Button--blue"
//     type="button"
// >
// { children }
// </button >


export default Button