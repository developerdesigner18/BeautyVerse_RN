import * as TYPES from '../../constants';

const initialState = {
  loading: false,
  login: [],
  error: null,
  isSuccess: false,
  isFailure: false,
};

const loginReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        login: null,
        isSuccess: false,
        isFailure: false,
      };
    case TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        login: actions.response,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        login: null,
        error: actions.error,
        isSuccess: false,
        isFailure: true,
      };
    default:
      return state;
  }
};
export default loginReducer;
