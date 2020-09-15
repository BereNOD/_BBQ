import * as React from 'react'
import { connect } from 'react-redux'
import { IStore } from '../../reducers/types'

import './styles.css'

import Title from '../Title'
import Image from '../Image'
import Text from '../text'

import CartItemPhoto from '../../assets/images/cart-item-photo.jpg'
import DeliveryTruck from '../../assets/icons/delivery-truck.svg'
import Gift from '../../assets/icons/Box.svg'


import Price from '../Price'
import Quantity from '../Quantity'
import Delete from '../Delete'
import OrderNameInput from '../OrderNameInput'
import OrderPhoneInput from '../OrderPhoneInput'
import PaymentType from '../PaymentType'
import Delivery from '../Delivery'
import Button from '../Buttons'
import DeliveryDay from '../DeliveryDay'
import DeliveryTime from '../DeliveryTime'


type StateProps = {
    cart: any
}
//   type DispatchProps = {
//     fetchBisnessMenu: (payload: IStore['cart']['list']) => void
//   }
type Props = {}
type State = {}

class Cart extends React.Component<Props & StateProps, State> {
    render = () => {
        console.log('Cart props', this.props);

        return (
            <div className="Cart">
                <div className="Cart__header">
                    <Title classes="Cart__title">Корзина</Title>
                    <Title classes="Cart__quantity">3 позиции</Title>
                </div>
                <div className="Cart__Items">
                    <div className="Cart__item">
                        <Image
                            src={CartItemPhoto}
                            alt="Cart item photo"
                            width={65}
                            height={65}
                        />
                        <div className="Cart__itemInfo">
                            <Text classes="Cart__itemInfo--description">Сыр на мангале с лимонно-медовой заправкой</Text>
                            <Price classes="Cart__itemPrice">29</Price>
                        </div>
                        <Quantity />
                        <Delete />
                    </div>
                    <div className="Cart__item">
                        <Image
                            src={CartItemPhoto}
                            alt="Cart item photo"
                            width={65}
                            height={65}
                        />
                        <div className="Cart__itemInfo">
                            <Text classes="Cart__itemInfo--description">Большой денер</Text>
                            <Price classes="Cart__itemPrice">39</Price>
                        </div>
                        <Quantity />
                        <Delete />
                    </div>
                    <div className="Cart__item">
                        <Image
                            src={CartItemPhoto}
                            alt="Cart item photo"
                            width={65}
                            height={65}
                        />
                        <div className="Cart__itemInfo">
                            <Text classes="Cart__itemInfo--description">Куриный бургер-сет</Text>
                            <Price classes="Cart__itemPrice">60</Price>
                        </div>
                        <Quantity />
                        <Delete />
                    </div>
                </div>
                <div className="Cart__orderDetails">
                    <OrderNameInput />
                    <OrderPhoneInput />
                    <PaymentType />
                    <Delivery />
                </div>
                <div className="PromoBonus__wrapper">
                    <Image
                        src={DeliveryTruck}
                        alt="Delivery truck photo"
                        width={30}
                        height={22}
                    />
                    <Text classes="Promo__text">Закажи еще на 123 грн и получи бесплатную доставку!</Text>
                </div>
                <div className="deliveryTime">
                    <Text classes="deliveryTime__title">Время доставки</Text>
                    <div className="deliveryTime__choice">
                        <div className="deliveryTime__shortly">
                            <input id="shortly" type="radio" />
                            <label htmlFor="shortly" className="deliveryTime__shorlyText">В ближайшее время</label>
                        </div>
                        <div className="deliveryTime__exact">
                            <input id="exact" type="radio" />
                            <label htmlFor="exact" className="deliveryTime__exactText">Доставить</label>
                            <DeliveryDay />
                            <DeliveryTime />
                        </div>
                    </div>
                </div>
                <div className="PromoBonus__wrapper">
                    <Image
                        src={Gift}
                        alt="Giftbox photo"
                        width={30}
                        height={31}
                    />
                    <Text classes="Promo__text">Доступно 2568 бонусных баллов</Text>
                    <Button classes="Button--blue PromoBonusButton__text">Использовать</Button>
                </div>
                <div className="Order__Prices">
                    <div className="Order__price">
                        <Text classes="Order__priceText">Стоимость заказа</Text>
                        <Price classes="Order__priceText">877</Price>
                    </div>
                    <div className="Order__delivery">
                        <Text classes="Order__deliveryText">Доставка</Text>
                        <Price classes="Order__deliveryText">50</Price>
                    </div>
                    <div className="Order__bonus">
                        <Text classes="Order__bonusText">Бонусы</Text>
                        <Price classes="Order__bonusText">-255</Price>
                    </div>
                    <div className="Order__sum">
                        <Text classes="Order__sumText">Итого к оплате</Text>
                        <Price classes="Order__sumText">-675</Price>
                    </div>
                </div>
                <div className="OrderButton__wrapper">
                    <Button classes="Button--blue OrderButton__text">Оформить заказ</Button>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state: IStore): StateProps => ({
    cart: state.cart.list

})

export default connect(mapStateToProps)(Cart)