import * as React from 'react'
import './styles.css'

interface Props {
    children: string
}

const Title = ({ children }: Props) => (
    <div className="Title">
        <span>{children}</span>
    </div>
)


export default Title