import * as React from 'react'

import { ICartItem } from '../../../src/reducers/cartTypes'

import Image from '../Image'
import Text from '../text'

import Price from '../Price'
import Quantity from '../Quantity'
import Delete from '../Delete'

import CartItemPhoto from '../../assets/images/cart-item-photo.jpg'

const CartItem = ({ id, title, price, quantity }: ICartItem): JSX.Element => (
  <div className="Cart__item">
    <Image
      src={CartItemPhoto}
      alt="Cart item photo"
      width={65}
      height={65}
    />
    <div className="Cart__itemInfo">
      <Text classes="Cart__itemInfo--description">{title}</Text>
      <Price classes="Cart__itemPrice">{price}</Price>
    </div>
    <Quantity
      id={id}
      quantity={quantity}
    />
    <Delete
      id={id}
    />
  </div>
)

export default CartItem
