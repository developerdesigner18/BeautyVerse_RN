import * as TYPES from '../../constants';

const initialState = {
  loading: false,
  timingsRes: [],
  error: null,
  isSuccess: false,
  isFailure: false,
};

const getDaysAndTimingReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.GET_DAYS_TIMING_REQUEST:
      return {
        ...state,
        loading: true,
        timingsRes: null,
        isSuccess: false,
        isFailure: false,
      };
    case TYPES.GET_DAYS_TIMING_SUCCESS:
      return {
        ...state,
        loading: false,
        timingsRes: actions.response,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.GET_DAYS_TIMING_FAILURE:
      return {
        ...state,
        loading: false,
        timingsRes: null,
        error: actions.error,
        isSuccess: false,
        isFailure: true,
      };
    default:
      return state;
  }
};
export default getDaysAndTimingReducer;
