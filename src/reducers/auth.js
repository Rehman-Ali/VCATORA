import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REMOVE_MESSAGE,
  LOGOUT
} from '../actions/types';

const initialState = {
  loading: true,
  user: null,
  isAuthenticated: null,
  error: '',
  message: ''
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('user', JSON.stringify(payload.data[0]));
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        message: payload.message
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('user');
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: payload
      };
    case REMOVE_MESSAGE:
      return {
        ...state,
        error: '',
      
      };

    default:
      return state;
  }
}
