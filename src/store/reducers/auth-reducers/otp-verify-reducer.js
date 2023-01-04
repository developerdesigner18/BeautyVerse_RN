import * as TYPES from '../../constants';

const initialState = {
  loading: false,
  verifyOTP: [],
  error: null,
  isSuccess: false,
  isFailure: false,
};

const verifyOTPReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.OTP_VERIFY_REQUEST:
      return {
        ...state,
        loading: true,
        verifyOTP: null,
        isSuccess: false,
        isFailure: false,
      };
    case TYPES.OTP_VERIFY_SUCCESS:
      return {
        ...state,
        loading: false,
        verifyOTP: actions.response,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.OTP_VERIFY_FAILURE:
      return {
        ...state,
        loading: false,
        verifyOTP: null,
        error: actions.error,
        isSuccess: false,
        isFailure: true,
      };
    default:
      return state;
  }
};
export default verifyOTPReducer;
