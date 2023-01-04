import * as TYPES from '../../constants';

const initialState = {
  loading: false,
  addressRes: [],
  error: null,
  isSuccess: false,
  isFailure: false,
};

const addressReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.ADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
        addressRes: null,
        isSuccess: false,
        isFailure: false,
      };
    case TYPES.ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        addressRes: actions.response,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.ADDRESS_FAILURE:
      return {
        ...state,
        loading: false,
        addressRes: null,
        error: actions.error,
        isSuccess: false,
        isFailure: true,
      };
    default:
      return state;
  }
};
export default addressReducer;
