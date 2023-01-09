import * as TYPES from '../../constants';

const initialState = {
  loading: false,
  forgotPass: [],
  error: null,
  isSuccess: false,
  isFailure: false,
};

const forgotPassReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        isSuccess: false,
        forgotPass: null,
        isFailure: false,
      };
    case TYPES.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        forgotPass: actions.response,
        isFailure: false,
      };
    case TYPES.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        forgotPass: null,
        error: actions.error,
        isFailure: true,
      };
    default:
      return state;
  }
};
export default forgotPassReducer;