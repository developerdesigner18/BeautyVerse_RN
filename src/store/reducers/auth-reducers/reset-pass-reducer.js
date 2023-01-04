import * as TYPES from '../../constants';

const initialState = {
  loading: false,
  resetPass: [],
  error: null,
  isSuccess: false,
  isFailure: false,
};

const resetPassReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        resetPass: null,
        isSuccess: false,
        isFailure: false,
      };
    case TYPES.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        resetPass: actions.response,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        resetPass: null,
        error: actions.error,
        isSuccess: false,
        isFailure: true,
      };
    default:
      return state;
  }
};
export default resetPassReducer;
