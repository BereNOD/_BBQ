import * as React from 'react';
import './styles.css'

interface Props {
    children: string
}

const Button = ({ children, outline }: Props) => (
    <button
        className="Button--blue"
        type="button"
    >
        {children}
    </button >
)



export default Button