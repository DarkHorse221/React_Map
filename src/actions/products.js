import { createAction } from 'redux-actions';

export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_FILTERS = 'SET_FILTERS';

export const filterProducts = createAction(FILTER_PRODUCTS);
export const setProducts = createAction(SET_PRODUCTS);
export const setFilters = createAction(SET_FILTERS);