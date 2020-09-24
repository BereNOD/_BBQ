import * as React from 'react'
import { Link } from 'react-router-dom'
import { IHeaderNavigationItem as IProps } from "../../reducers/navigationTypes"

const NavigationItem = ({ slug, title, src }: IProps) => (
  <Link to={`/menu/${slug}`}>
    <img src={src} alt={title} />
    <span>{title}</span>
  </Link>
)

export default NavigationItem