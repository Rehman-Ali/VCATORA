import axios from 'axios';
import uuid from 'uuid';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REMOVE_MESSAGE,
  LOGOUT
} from './types';
import setAuthToken from '../utils/setAuthUser';

//Load User
export const loadUser = () => async dispatch => {
  if (localStorage.user) {
    setAuthToken(localStorage.user);
  }

  try {
    const user = localStorage.getItem('user');
    console.log('load user loacalStorage =>', user);
    dispatch({
      type: USER_LOADED,
      payload: user
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const register = ({
  customers_firstname,
  customers_lastname,
  email,
  password
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
    customers_firstname,
    customers_lastname,
    email,
    password
  });

  try {
    const res = await axios.post('/api/processregistration', body, config);
    console.log('response data', res.data.data[0]);
    if (!res.data.data.length) {
      dispatch({
        type: REGISTER_FAIL,
        payload: res.data.message
      });

      setTimeout(() => dispatch({ type: REMOVE_MESSAGE }), 3000);
    } else {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });

      dispatch(loadUser());
    }
  } catch (err) {
    console.error(err);

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = (email, password) => async dispatch => {
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

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/processlogin', body, config);
    if (!res.data.data.length) {
      dispatch({
        type: LOGIN_FAIL,
        payload: res.data.message
      });

      setTimeout(() => dispatch({ type: REMOVE_MESSAGE }), 3000);
    } else {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });

      dispatch(loadUser());
    }
  } catch (err) {
    console.error(err);

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout / Clear Profile
export const logout = () => dispatch => {
  //dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};
