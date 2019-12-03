import {
  GETALLPRODUCTS_FAIL,
  GETALLPRODUCTS_SUCCESS,
  REMOVE_MESSAGE,
  GETPRODUCTBYID_FAIL,
  GETPRODUCTBYID_SUCCESS,
  
} from '../actions/types';
import { Redirect } from 'react-router-dom';
const initialState = {
  loading: true,
  allProduct: [],
  message: '',
  products: '',
  cartProduct: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GETALLPRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        allProduct: payload.product_data,
        message: payload.message
      };

    case GETPRODUCTBYID_SUCCESS:
      console.log('reducers product data:', payload.product_data);
      return {
        ...state,
        loading: false,
        product: payload.product_data[0],
        message: payload.message
      };
    // case ADDTOCART_SUCCESS:
    //   //  localStorage.setItem('cartItem', JSON.stringify(state.cartProduct));
    //   //   console.log(payload.product_data);

    //   let aNewProducts = [...state.allProduct, payload.product_data[0]];
    //   let aNewTotal = 0;
    //   aNewProducts.forEach(product => {
    //     aNewTotal += product.quantity * product.products_price;
    //   });
    //   return {
    //     cartProduct: aNewProducts,
    //     total: aNewTotal
    //   };

  //  case GETALLPRODUCTS_FAIL:
    case GETPRODUCTBYID_FAIL:
   // case ADDTOCART_FAIL:
      return {
        ...state,
        // allProduct: [...state.allProduct],
        message: payload.message,
        loading: false
      };

    case REMOVE_MESSAGE:
      return {
        ...state,
        message: '',
        // allProduct: [...state.allProduct],
        loading: false
      };

    // case ADDTOCART:
    //   localStorage.setItem('cartItem', JSON.stringify(state.cartProduct));
    //   return {
    //     ...state
    //   };

    default:
      return state;
  }
}
