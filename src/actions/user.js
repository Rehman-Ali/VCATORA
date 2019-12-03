import axios from 'axios';
import uuid from 'uuid';
import {
  CHANGEPASSWORD_SUCCESS,
  CHANGEPASSWORD_FAIL,
  REMOVE_MESSAGE,
  UPDATEUSERINFO_SUCCESS,
  UPDATEUSERINFO_FAIL,
  CONTACTUS_FAIL,
  CONTACTUS_SUCCESS,
  FORGOTPASSWORD_FAIL,
  FORGOTPASSWORD_SUCCESS
} from './types';

//  Forgot Password
export const ForgotUserPassword = ({ email }) => async dispatch => {
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
    email
  });

  try {
    const res = await axios.post('/api/processforgotpassword', body, config);
    if (!res.data.success === 0) {
      dispatch({
        type: FORGOTPASSWORD_FAIL,
        payload:
          'something goes wrong! Make sure your email address is correct!'
      });

      setTimeout(() => dispatch({ type: REMOVE_MESSAGE }), 3000);
    } else {
      dispatch({
        type: FORGOTPASSWORD_SUCCESS,
        payload: res.data.message
      });
      setTimeout(() => dispatch({ type: REMOVE_MESSAGE }), 3000);
    }
  } catch (err) {
    console.error(err);

    dispatch({
      type: FORGOTPASSWORD_FAIL,
      payload: 'something goes wrong! Make sure your email address is correct!'
    });
  }
};

//  For update user info
export const updateUserInfo = ({
  customers_id,
  customers_firstname,
  customers_lastname,
  customers_gender,
  email,
  customers_telephone
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
    customers_id,
    customers_firstname,
    customers_lastname,
    customers_gender,
    email,
    customers_telephone
  });

  try {
    const res = await axios.post('/api/updatecustomerinfo', body, config);
    if (!res.data.success === 0 || !res.data.success === 3) {
      dispatch({
        type: UPDATEUSERINFO_FAIL,
        payload: res.data.message
      });

      setTimeout(() => dispatch({ type: REMOVE_MESSAGE }), 3000);
    } else {
      dispatch({
        type: UPDATEUSERINFO_SUCCESS,
        payload: res.data
      });
      setTimeout(() => dispatch({ type: REMOVE_MESSAGE }), 3000);
    }
  } catch (err) {
    console.error(err);

    dispatch({
      type: UPDATEUSERINFO_FAIL
    });
  }
};

//  For Contact Us Page
export const contactUsPage = ({ name, email, message }) => async dispatch => {
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
    name,
    email,
    message
  });

  try {
    const res = await axios.post('/api/contactus', body, config);
    console.log('contact page message =>', JSON.stringify(res.data));
    if (!res.data.success === 0) {
      dispatch({
        type: CONTACTUS_FAIL,
        payload: res.data.message
      });

      setTimeout(() => dispatch({ type: REMOVE_MESSAGE }), 3000);
    } else {
      dispatch({
        type: CONTACTUS_SUCCESS,
        payload: 'message has been sent successfully!'
      });
      setTimeout(() => dispatch({ type: REMOVE_MESSAGE }), 3000);
    }
  } catch (err) {
    console.error(err);

    dispatch({
      type: CONTACTUS_FAIL
    });
  }
};
