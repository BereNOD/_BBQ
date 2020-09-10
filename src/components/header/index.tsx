import * as React from 'react'
import { connect } from 'react-redux'

import IncomingCall from '../../assets/icons/IncomingCall.svg'
import Clock from '../../assets/icons/Clock.svg'
import Facebook from '../../assets/icons/Facebook.svg'
import Instagram from '../../assets/icons/Instagram.svg'
import Search from '../../assets/icons/Search.svg'

import HeaderBackground from '../../assets/images/headerBackground.jpg'

import Link from '../link'
import Text from '../text'
import Image from '../Image'
import Logo from '../logo'

import './styles.scss'

interface Props {
  background: string
}

class Header extends React.Component<Props> {
  static defaultProps = {
    background: HeaderBackground
  }

  render = () => {
    console.log('Header props:', this.props);
    
    return (
      <header
        className="Header"
        style={{
          backgroundImage: `url(${this.props.background})`
        }}
      >
        <div className="Header__inner container">
          <Link>
            <Image
              src={IncomingCall}
              alt="phone"
              width={20}
              height={20}
            />
            <Text>(066) 451-36-74</Text>
          </Link>
          <Link>
            <Text>Заказать обратный звонок</Text>
          </Link>
          <div className="Header__logoWrapper">
            <Logo />
          </div>
          <Text classes="Header__openTime">
            <Image
              src={Clock}
              alt="clock"
              width={20}
              height={20}
            />
            <Text>Работаем с 10:00 до 22:00</Text>
          </Text>
          <Link>
            <Image
              src={Facebook}
              alt="Facebook icon"
              width={20}
              height={20}
            />
          </Link>
          <Link>
            <Image
              src={Instagram}
              alt="Instagram icon"
              width={20}
              height={20}
            />
          </Link>
          <Link>
            <Image
              src={Search}
              alt="search"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </header>
    )
  }
}

// @ts-ignore
const mapStateToProps = (state) => ({
  bisnessMenu: state.menu.bisness
})

export default connect(mapStateToProps)(Header)