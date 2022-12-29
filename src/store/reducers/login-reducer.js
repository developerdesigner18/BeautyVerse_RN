import * as TYPES from '../constants';

const initialState = {
  loading: false,
  userProfile: [],
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
        userProfile: null,
        isSuccess: false,
        isFailure: false,
      };
    case TYPES.LOGIN_SUCCESS:
      console.log('actions ===>', actions);
      return {
        ...state,
        loading: false,
        userProfile: actions.response,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        userProfile: null,
        error: actions.error,
        isSuccess: false,
        isFailure: true,
      };
    default:
      return state;
  }
};
export default loginReducer;
