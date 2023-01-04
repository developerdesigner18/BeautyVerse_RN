import * as TYPES from '../../constants';

const initialState = {
  loading: false,
  user: [],
  error: null,
  isSuccess: false,
  isFailure: false,
};

const signupReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
        user: null,
        isSuccess: false,
        isFailure: false,
      };
    case TYPES.SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: actions.response,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
        user: null,
        error: actions.error,
        isSuccess: false,
        isFailure: true,
      };
    default:
      return state;
  }
};
export default signupReducer;
