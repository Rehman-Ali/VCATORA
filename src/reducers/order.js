import {
  REMOVE_MESSAGE,
  ADDORDER_FAIL,
  ADDORDER_SUCCESS
} from '../actions/types';

const initialState = {
  loading: true,
  message: '',
  success: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADDORDER_SUCCESS:
      localStorage.removeItem('userOrderData');
      return {
        ...state,
        loading: false,
        message: payload,
        success: true
      };
    case ADDORDER_FAIL:
      return {
        ...state,
        loading: false,
        message: payload,
        success: false
      };

    case REMOVE_MESSAGE:
      return {
        ...state,
        message: '',
        // allProduct: [...state.allProduct],
        loading: false
      };

    default:
      return state;
  }
}
