import {
  CHANGEPASSWORD_FAIL,
  CHANGEPASSWORD_SUCCESS,
  REMOVE_MESSAGE,
  UPDATEUSERINFO_FAIL,
  UPDATEUSERINFO_SUCCESS,
  CONTACTUS_SUCCESS,
  CONTACTUS_FAIL,
  FORGOTPASSWORD_FAIL,
  FORGOTPASSWORD_SUCCESS
} from '../actions/types';

const initialState = {
  loading: true,
  updateUserData: null,
  message: ''
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FORGOTPASSWORD_SUCCESS:
      return {
        ...state,
        message: payload
      };

    case FORGOTPASSWORD_FAIL:
      return {
        ...state,
        message: payload
      };
    case CONTACTUS_SUCCESS:
      return {
        ...state,
        message: payload
      };

    case CONTACTUS_FAIL:
      return {
        ...state,
        message: payload
      };
    case UPDATEUSERINFO_SUCCESS:
      localStorage.setItem('user', JSON.stringify(payload.data[0]));
      return {
        ...state,
        message: payload.message,
        updateUserData: payload.data
      };
    case UPDATEUSERINFO_FAIL:
      return {
        ...state,
        message: payload
      };
   
    case REMOVE_MESSAGE:
      return {
        ...state,
        message: ''
      };

    default:
      return state;
  }
}
