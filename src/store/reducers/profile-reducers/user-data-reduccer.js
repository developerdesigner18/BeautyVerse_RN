import * as TYPES from '../../constants';

const initialState = {
  loading: false,
  profile: [],
  error: null,
  isSuccess: false,
  isFailure: false,
};

const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.USER_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        profile: null,
        isSuccess: false,
        isFailure: false,
      };
    case TYPES.USER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: actions.response,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.USER_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        profile: null,
        error: actions.error,
        isSuccess: false,
        isFailure: true,
      };
    default:
      return state;
  }
};
export default userReducer;
