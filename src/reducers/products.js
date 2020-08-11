import { SET_PRODUCTS } from '../actions/products';

export default function products(
  state = [],
  action
) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
}