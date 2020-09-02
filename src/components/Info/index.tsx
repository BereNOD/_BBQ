import * as React from 'react'
import './styles.css'

interface Props {
    children: string
}

const Info = ({ children }: Props) => (
    <div className="Info">
        <span>{children}</span>
    </div>
)


export default Info