import axios from 'axios';
import uuid from 'uuid';
import {
  GETALLPRODUCTS_SUCCESS,
  GETALLPRODUCTS_FAIL,
  REMOVE_MESSAGE,
  GETPRODUCTBYID_FAIL,
  GETPRODUCTBYID_SUCCESS,
  ADDTOCART_SUCCESS,
  ADDTOCART_FAIL,
  ADDTOCART
} from './types';

//  For Get all product
export const getAllProducts = ({
  page_number,
  language_id,
  currency_code
}) => async dispatch => {
  let id = uuid.v4();
  const config = {
    headers: {
      //  'Access-Control-Allow-Credentials' : true,
      'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods':'POST',
      // 'Access-Control-Allow-Headers':'application/json',
      'Content-Type': 'application/json',
      'consumer-key': '6801303c908569e8466efaac4d0cce85',
      'consumer-secret': '268e7de2afe718c957e77cadbf25ff86',
      'consumer-nonce': id,
      'consumer-device-id': 'vec786code',
      'consumer-ip': '101.50.76.95'
    }
  };

  const body = JSON.stringify({
    page_number,
    language_id,
    currency_code
  });

  try {
    const res = await axios.post('/api/getallproducts', body, config);
    if (!res.data.success === 0) {
      dispatch({
        type: GETALLPRODUCTS_FAIL,
        payload: res.data.message
      });

      setTimeout(() => dispatch({ type: REMOVE_MESSAGE }), 5000);
    } else {
      dispatch({
        type: GETALLPRODUCTS_SUCCESS,
        payload: res.data
      });
      setTimeout(() => dispatch({ type: REMOVE_MESSAGE }), 5000);
    }
  } catch (err) {
    console.error(err);

    dispatch({
      type: GETALLPRODUCTS_FAIL,
      payload: 'something goes wrong!'
    });
  }
};

//  For Get Product By Id
export const getProductById = ({
  language_id,
  products_id,
  currency_code
}) => async dispatch => {
  let id = uuid.v4();
  const config = {
    headers: {
      //  'Access-Control-Allow-Credentials' : true,
      'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods':'POST',
      // 'Access-Control-Allow-Headers':'application/json',
      'Content-Type': 'application/json',
      'consumer-key': '6801303c908569e8466efaac4d0cce85',
      'consumer-secret': '268e7de2afe718c957e77cadbf25ff86',
      'consumer-nonce': id,
      'consumer-device-id': 'vec786code',
      'consumer-ip': '101.50.76.95'
    }
  };

  const body = JSON.stringify({
    language_id,
    products_id,
    currency_code
  });

  try {
    const res = await axios.post('/api/getallproducts', body, config);
    if (!res.data.success === 0) {
      dispatch({
        type: GETPRODUCTBYID_FAIL,
        payload: res.data.message
      });

      setTimeout(() => dispatch({ type: REMOVE_MESSAGE }), 5000);
    } else {
      dispatch({
        type: GETPRODUCTBYID_SUCCESS,
        payload: res.data
      });
      setTimeout(() => dispatch({ type: REMOVE_MESSAGE }), 5000);
    }
  } catch (err) {
    console.error(err);

    dispatch({
      type: GETALLPRODUCTS_FAIL,
      payload: 'something goes wrong!'
    });
  }
};

//  For Add to cart product
export const AddToCart = ({
  language_id,
  products_id,
  currency_code
}) => async dispatch => {
  // console.log(products_id);
  let id = uuid.v4();
  const config = {
    headers: {
      //  'Access-Control-Allow-Credentials' : true,
      'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods':'POST',
      // 'Access-Control-Allow-Headers':'application/json',
      'Content-Type': 'application/json',
      'consumer-key': '6801303c908569e8466efaac4d0cce85',
      'consumer-secret': '268e7de2afe718c957e77cadbf25ff86',
      'consumer-nonce': id,
      'consumer-device-id': 'vec786code',
      'consumer-ip': '101.50.76.95'
    }
  };

  const body = JSON.stringify({
    language_id,
    products_id,
    currency_code
  });

  try {
    const res = await axios.post('/api/getallproducts', body, config);
    if (!res.data.success === 0) {
      dispatch({
        type: ADDTOCART_FAIL,
        payload: res.data.message
      });

      setTimeout(() => dispatch({ type: REMOVE_MESSAGE }), 5000);
    } else {
      dispatch({
        type: ADDTOCART_SUCCESS,
        payload: res.data
      });
      setTimeout(() => dispatch({ type: ADDTOCART }), 2000);
    }
  } catch (err) {
    console.error(err);

    dispatch({
      type: ADDTOCART_FAIL,
      payload: 'something goes wrong!'
    });
  }
};
