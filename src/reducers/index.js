import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import user from './user';
import order from './order';
import product from './product';
import cart from './cart';
export default combineReducers({
 auth,
 alert,
 user,
 product,
 order,
 cart
});
