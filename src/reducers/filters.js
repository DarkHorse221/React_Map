import { SET_FILTERS } from '../actions/products';

export default function products(
  state = [],
  action
) {
  switch (action.type) {
    case SET_FILTERS:
      return action.payload;
    default:
      return state;
  }
}