import * as TYPES from '../../constants';

const initialState = {
  loading: false,
  photosRes: [],
  error: null,
  isSuccess: false,
  isFailure: false,
};

const postBusinessPhotosReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.BUSINESS_IMAGES_REQUEST:
      return {
        ...state,
        loading: true,
        photosRes: null,
        isSuccess: false,
        isFailure: false,
      };
    case TYPES.BUSINESS_IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        photosRes: actions.response,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.BUSINESS_IMAGES_FAILURE:
      return {
        ...state,
        loading: false,
        photosRes: null,
        error: actions.error,
        isSuccess: false,
        isFailure: true,
      };
    default:
      return state;
  }
};
export default postBusinessPhotosReducer;
