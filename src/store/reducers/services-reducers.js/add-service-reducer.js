import * as TYPES from '../../constants';

const initialState = {
  loading: false,
  serviceInfo: [],
  error: null,
  isSuccess: false,
  isFailure: false,
};

const addServiceReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.ADD_SERVICE_REQUEST:
      return {
        ...state,
        loading: true,
        serviceInfo: null,
        isSuccess: false,
        isFailure: false,
      };
    case TYPES.ADD_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        serviceInfo: actions.response,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.ADD_SERVICE_FAILURE:
      return {
        ...state,
        loading: false,
        serviceInfo: null,
        error: actions.error,
        isSuccess: false,
        isFailure: true,
      };
    default:
      return state;
  }
};
export default addServiceReducer;
