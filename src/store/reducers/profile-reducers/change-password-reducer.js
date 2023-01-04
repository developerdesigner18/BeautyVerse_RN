import * as TYPES from '../../constants';

const initialState = {
  loading: false,
  changePassword: [],
  error: null,
  isSuccess: false,
  isFailure: false,
};

const changePasswordReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.CHANGE_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        changePassword: null,
        isSuccess: false,
        isFailure: false,
      };
    case TYPES.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        changePassword: actions.response,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        changePassword: null,
        error: actions.error,
        isSuccess: false,
        isFailure: true,
      };
    default:
      return state;
  }
};
export default changePasswordReducer;
