import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  CLEAR_CART
} from './types';

export const addItemToCart = product => {
  return {
    type: ADD_ITEM,
    product
  };
};

export const removeItemFromCart = (index, product) => {
  console.log('action remove to cart is fired');
  return {
    type: REMOVE_ITEM,
    index,
    product
  };
};

export const increaseItemQuantity = (index, product, quantity) => {
  console.log('quantity of product', quantity);
  console.log('quantity of index', index);

  return {
    type: INCREASE_ITEM,
    index,
    product,
    quantity
  };
};

export const decreaseItemQuantity = (index, product, quantity) => {
  return {
    type: DECREASE_ITEM,
    index,
    product,
    quantity
  };
};

export const clearCartContent = () => {
  return {
    type: CLEAR_CART
  };
};
