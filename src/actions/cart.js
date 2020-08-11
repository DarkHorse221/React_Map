import { createAction } from 'redux-actions';

export const ADD_TO_CART = 'ADD_TO_CART';
export const CLEAR_CART = 'CLEAR_CART';

export const addToCart = createAction(ADD_TO_CART);
export const clearCart = createAction(CLEAR_CART);