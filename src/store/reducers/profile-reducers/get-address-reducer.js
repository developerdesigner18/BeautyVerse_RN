import * as TYPES from '../../constants';

const initialState = {
  loading: false,
  address: [],
  error: null,
  isSuccess: false,
  isFailure: false,
};

const getAddressReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.GET_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
        address: null,
        isSuccess: false,
        isFailure: false,
      };
    case TYPES.GET_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        address: actions.response,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.GET_ADDRESS_FAILURE:
      return {
        ...state,
        loading: false,
        address: null,
        error: actions.error,
        isSuccess: false,
        isFailure: true,
      };
    default:
      return state;
  }
};
export default getAddressReducer;
