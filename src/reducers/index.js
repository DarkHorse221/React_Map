import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import filters from './filters';

export default combineReducers({
    products,
    cart,
    filters,
});