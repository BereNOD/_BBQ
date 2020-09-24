import { ICartState } from './cart'
import { IMenuState } from './menu'
import { INavigationState } from './navigation'

export interface IStore {
  menu: IMenuState
  cart: ICartState
  navigation: INavigationState
}