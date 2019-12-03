import axios from 'axios';
import uuid from 'uuid';
import {
  ADDSHIPPINGADDRESS_SUCCESS,
  ADDSHIPPINGADDRESS_FAIL,
  REMOVE_MESSAGE,
  UPDATESHIPPINGADDRESS_SUCCESS,
  UPDATESHIPPINGADDRESS_FAIL,
  ADDORDER_SUCCESS,
  ADDORDER_FAIL
} from './types';

// Add User Shipping Address
// export const addShippingAddress = ({
//     customers_id,
//     customers_firstname,
//     customers_lastname,
//     entry_street_address,
//     entry_postcode,
//     entry_city,
//     entry_country_id

//   }) => async dispatch => {
//     let id = uuid.v4();
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//         'consumer-key': '6801303c908569e8466efaac4d0cce85',
//         'consumer-secret': '268e7de2afe718c957e77cadbf25ff86',
//         'consumer-nonce': id,
//         'consumer-device-id': 'vec786code',
//         'consumer-ip': '101.50.76.95'
//       }
//     };

//     const body = JSON.stringify({
//       customers_firstname,
//       customers_lastname,
//       email,
//       password
//     });

//     try {
//       const res = await axios.post('/api/processregistration', body, config);
//       console.log('response data', res.data.data[0]);
//       if (!res.data.data.length) {
//         dispatch({
//           type: REGISTER_FAIL,
//           payload: res.data.message
//         });

//         setTimeout(() => dispatch({ type: REMOVE_MESSAGE }), 3000);
//       } else {
//         dispatch({
//           type: REGISTER_SUCCESS,
//           payload: res.data
//         });

//         dispatch(loadUser());
//       }
//     } catch (err) {
//       console.error(err);

//       dispatch({
//         type: REGISTER_FAIL
//       });
//     }
//   };

export const addOrder = ({
  billing_city,
  billing_country,
  billing_firstname,
  billing_lastname,
  billing_phone,
  billing_postcode,
  billing_state,
  billing_street_address,
  billing_suburb,
  billing_zone,
  billing_zone_id,
  comments,
  coupon_amount,
  coupons,
  email,
  customers_id,
  customers_name,
  customers_telephone,
  delivery_city,
  delivery_country,
  delivery_country_id,
  delivery_firstname,
  delivery_lastname,
  delivery_phone,
  delivery_postcode,
  delivery_state,
  delivery_street_address,
  delivery_suburb,
  delivery_zone,
  delivery_zone_id,
  delivery_cost,
  delivery_time,
  is_coupon_applied,
  language_id,
  latitude,
  longitude,
  nonce,
  packing_charge_tax,
  payment_method,
  currency_code,
  products,
  productsTotal,
  shipping_cost,
  shipping_method,
  tax_zone_id,
  totalPrice,
  total_tax
}) => async dispatch => {
  let id = uuid.v4();
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'consumer-key': '6801303c908569e8466efaac4d0cce85',
      'consumer-secret': '268e7de2afe718c957e77cadbf25ff86',
      'consumer-nonce': id,
      'consumer-device-id': 'vec786code',
      'consumer-ip': '101.50.76.95'
    }
  };

  const body = JSON.stringify({
    billing_city,
    billing_country,
    billing_firstname,
    billing_lastname,
    billing_phone,
    billing_postcode,
    billing_state,
    billing_street_address,
    billing_suburb,
    billing_zone,
    billing_zone_id,
    comments,
    coupon_amount,
    coupons,
    email,
    customers_id,
    customers_name,
    customers_telephone,
    delivery_city,
    delivery_country,
    delivery_country_id,
    delivery_firstname,
    delivery_lastname,
    delivery_phone,
    delivery_postcode,
    delivery_state,
    delivery_street_address,
    delivery_suburb,
    delivery_zone,
    delivery_zone_id,
    delivery_cost,
    delivery_time,
    is_coupon_applied,
    language_id,
    latitude,
    longitude,
    nonce,
    packing_charge_tax,
    payment_method,
    currency_code,
    products,
    productsTotal,
    shipping_cost,
    shipping_method,
    tax_zone_id,
    totalPrice,
    total_tax
  });
  console.log('add order body:', body);
  try {
    const res = await axios.post('/api/addtoorder', body, config);
    // console.log('response data', res.data.data[0]);
    if (res.data.success === 0) {
      dispatch({
        type: ADDORDER_FAIL,
        payload: res.data.message
      });

      setTimeout(() => dispatch({ type: REMOVE_MESSAGE }), 3000);
    } else {
      dispatch({
        type: ADDORDER_SUCCESS,
        payload: res.data.message
      });

      setTimeout(() => dispatch({ type: REMOVE_MESSAGE }), 3000);
    }
  } catch (err) {
    console.error(err);

    dispatch({
      type: ADDORDER_FAIL,
      payload: 'server error'
    });
  }
};
