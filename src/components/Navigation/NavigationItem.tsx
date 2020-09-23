import * as React from 'react'
import { Link } from 'react-router-dom'

export interface IProps {
  id: number
  slug: string
  title: string
  src: string
}

const NavigationItem = ({ slug, title, src }: IProps) => (
  <Link to={`/menu/${slug}`}>
    <img src={src} alt={title} />
    <span>{title}</span>
  </Link>
)

export default NavigationItem