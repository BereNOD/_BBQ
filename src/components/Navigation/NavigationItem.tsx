import * as React from 'react'
import { Link } from 'react-router-dom'

export interface IProps {
    id: number
    slug: string
    title: string
    src: string
}

const NvagationItem = ({ title, id, slug, src }: IProps) => (
    <Link to={slug} className="NavBarItem">
        <div className="NavBarItem__imageBox">
            <img src={src} alt={title} className="NavBarItem__image" />
        </div>
        <span className="NavBarItem__title">{title}</span>
    </Link>
)

export default NvagationItem