import * as TYPES from '../../constants';

const initialState = {
  loading: false,
  removeAddress: [],
  error: null,
  isSuccess: false,
  isFailure: false,
};

const removeAddressReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.REMOVE_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
        removeAddress: null,
        isSuccess: false,
        isFailure: false,
      };
    case TYPES.REMOVE_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        removeAddress: actions.response,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.REMOVE_ADDRESS_FAILURE:
      return {
        ...state,
        loading: false,
        removeAddress: null,
        error: actions.error,
        isSuccess: false,
        isFailure: true,
      };
    default:
      return state;
  }
};
export default removeAddressReducer;
