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
        forgotPass: null,
        isSuccess: false,
        isFailure: false,
      };
    case TYPES.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        forgotPass: actions.response,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        forgotPass: null,
        error: actions.error,
        isSuccess: false,
        isFailure: true,
      };
    default:
      return state;
  }
};
export default forgotPassReducer;
