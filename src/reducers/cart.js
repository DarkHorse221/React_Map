import { ADD_TO_CART, CLEAR_CART } from '../actions/cart';

export default function storeCart(
  state = {
    items: [],
    total: 0,
    discount: 0,
    discountPercent: 0,
    currency_unit: "$"
  },
  action
) {
  switch (action.type) {
    case ADD_TO_CART:
      state.items.push(action.payload);
      let totalAmount = 0;
      state.items.every((item) => {
        return totalAmount += parseFloat(item.price);
      })
      return { ...state, total: totalAmount };
    case CLEAR_CART: 
      return {
        items: [],
        total: 0,
        discount: 0,
        discountPercent: 0,
        currency_unit: "$"
      };
    default:
      return state;
  }
}
