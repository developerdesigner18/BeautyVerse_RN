import * as TYPES from '../../constants';

const initialState = {
  loading: false,
  profilePic: [],
  error: null,
  isSuccess: false,
  isFailure: false,
};

const profilePicReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.PROFILE_PIC_REQUEST:
      return {
        ...state,
        loading: true,
        profilePic: null,
        isSuccess: false,
        isFailure: false,
      };
    case TYPES.PROFILE_PIC_SUCCESS:
      return {
        ...state,
        loading: false,
        profilePic: actions.response,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.PROFILE_PIC_FAILURE:
      return {
        ...state,
        loading: false,
        profilePic: null,
        error: actions.error,
        isSuccess: false,
        isFailure: true,
      };
    default:
      return state;
  }
};
export default profilePicReducer;
