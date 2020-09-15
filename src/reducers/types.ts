import { ICartState } from './cart';
import { IMenuState } from './menu'

export interface IStore {
  menu: IMenuState
  cart: ICartState
}