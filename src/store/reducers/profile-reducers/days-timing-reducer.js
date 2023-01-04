import * as TYPES from '../../constants';

const initialState = {
  loading: false,
  daysAndTiming: [],
  error: null,
  isSuccess: false,
  isFailure: false,
};

const daysAndTimingReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.DAYS_TIMING_REQUEST:
      return {
        ...state,
        loading: true,
        daysAndTiming: null,
        isSuccess: false,
        isFailure: false,
      };
    case TYPES.DAYS_TIMING_SUCCESS:
      return {
        ...state,
        loading: false,
        daysAndTiming: actions.response,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.DAYS_TIMING_FAILURE:
      return {
        ...state,
        loading: false,
        daysAndTiming: null,
        error: actions.error,
        isSuccess: false,
        isFailure: true,
      };
    default:
      return state;
  }
};
export default daysAndTimingReducer;
