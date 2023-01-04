import * as TYPES from '../../constants';

const initialState = {
  loading: false,
  photos: [],
  error: null,
  isSuccess: false,
  isFailure: false,
};

const getBusinessPhotosReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.GET_IMAGES_REQUEST:
      return {
        ...state,
        loading: true,
        photos: null,
        isSuccess: false,
        isFailure: false,
      };
    case TYPES.GET_IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        photos: actions.response,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.GET_IMAGES_FAILURE:
      return {
        ...state,
        loading: false,
        photos: null,
        error: actions.error,
        isSuccess: false,
        isFailure: true,
      };
    default:
      return state;
  }
};
export default getBusinessPhotosReducer;
