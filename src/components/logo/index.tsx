import * as React from 'react'

import BBQLogo from '../../assets/images/BBQLogo.png'

import Link from '../link'
import Image from '../image'

import './styles.scss'

interface Props {

}

class Logo extends React.Component<Props> {
  render = () => (
    <Link classes="Logo__link">
      <Image
        src={BBQLogo}
        alt="BBQ"
        width={175}
        height={102}
        classes="Logo__image"
      />
    </Link>
  )
}

export default Logo