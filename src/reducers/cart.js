import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  CLEAR_CART
} from '../actions/types';

const initialState = {
  products: [],
  productTotal: 0,
  total: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      let aNewProducts = [...state.products, action.product];
      let aNewTotal = 0;
      aNewProducts.forEach(product => {
        aNewTotal += product.quantity * product.products_price;
      });
      return {
        products: aNewProducts,
        total: aNewTotal
      };

    case REMOVE_ITEM:
      const rNewProducts = state.products.filter(
        p => p.id !== action.product.id
      );
      let rNewTotal = 0;
      rNewProducts.forEach(product => {
        rNewTotal += product.quantity * product.products_price;
      });
      console.log('reduces remove to cart');

      return {
        products: rNewProducts,
        total: rNewTotal
      };

    case INCREASE_ITEM:
      // for increse product price
      let seletedproduct = action.product;
      const prodPrice = seletedproduct.products_price;
      const prodQTY = seletedproduct.quantity + 1;

      let iNewProducts = state.products.map((product, index) => {
        if (action.index === index) {
          return Object.assign({}, product, { quantity: action.quantity });
        }
        return product;
      });
      let iNewTotal = 0;

      iNewProducts.forEach(product => {
        iNewTotal += product.quantity * product.products_price;
      });
      return {
        products: iNewProducts,
        total: iNewTotal,
        productTotal: prodPrice * prodQTY
      };

    case DECREASE_ITEM:
      let dNewProducts = state.products.map((product, index) => {
        if (action.index === index) {
          return Object.assign({}, product, { quantity: action.quantity });
        }
        return product;
      });
      let dNewTotal = 0;
      dNewProducts.forEach(product => {
        dNewTotal += product.quantity * product.products_price;
      });
      return {
        products: dNewProducts,
        total: dNewTotal
      };

    case CLEAR_CART:
      return {
        products: [],
        total: 0
      };

    default:
      return state;
  }
}
