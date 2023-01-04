import * as TYPES from '../constants';
import axios from 'axios';
import {Config} from '../../../config';
import {endPoints} from '../endPoints';

//--------------------PROFILE PIC--------------------
export const profilePicThunk = (params, token) => {
  return async dispatch => {
    dispatch({type: TYPES.PROFILE_PIC_REQUEST});
    try {
      let response = await axios.post(
        Config.BASE_URL + endPoints.profilePic,
        params,
        {
          headers: {
            Authorization: token,
          },
        },
      );
      if (response.status == 200) {
        dispatch({
          type: TYPES.PROFILE_PIC_SUCCESS,
          response,
        });
      }
    } catch (error) {
      dispatch({
        type: TYPES.PROFILE_PIC_FAILURE,
        error,
      });
    }
  };
};

//--------------------USER PROFILE--------------------
export const getUserThunk = token => {
  return async dispatch => {
    dispatch({type: TYPES.USER_DATA_REQUEST});
    try {
      let response = await axios.get(Config.BASE_URL + endPoints.singup, {
        headers: {
          Authorization: token,
        },
      });
      if (response.status == 200) {
        console.log('ADDRESS :', response);
        dispatch({
          type: TYPES.USER_DATA_SUCCESS,
          response,
        });
      }
    } catch (error) {
      dispatch({
        type: TYPES.USER_DATA_FAILURE,
        error,
      });
    }
  };
};

//--------------------BUSINESS ADDRESSES--------------------
export const getAddressThunk = token => {
  return async dispatch => {
    dispatch({type: TYPES.GET_ADDRESS_REQUEST});
    try {
      let response = await axios.get(Config.BASE_URL + endPoints.address, {
        headers: {
          Authorization: token,
        },
      });
      if (response.status == 200) {
        console.log('ADDRESS :', response);
        dispatch({
          type: TYPES.GET_ADDRESS_SUCCESS,
          response,
        });
      }
    } catch (error) {
      dispatch({
        type: TYPES.GET_ADDRESS_FAILURE,
        error,
      });
    }
  };
};

export const addressThunk = (params, token) => {
  return async dispatch => {
    dispatch({type: TYPES.ADDRESS_REQUEST});
    try {
      let response = await axios.post(
        Config.BASE_URL + endPoints.address,
        params,
        {
          headers: {
            Authorization: token,
          },
        },
      );
      if (response.status == 200) {
        dispatch({
          type: TYPES.ADDRESS_SUCCESS,
          response,
        });
      }
    } catch (error) {
      dispatch({
        type: TYPES.ADDRESS_FAILURE,
        error,
      });
    }
  };
};

export const removeAddressThunk = (id, token) => {
  return async dispatch => {
    dispatch({type: TYPES.REMOVE_ADDRESS_REQUEST});
    try {
      let response = await axios.delete(
        Config.BASE_URL + endPoints.address + '/' + id,
        {
          headers: {
            Authorization: token,
          },
        },
      );
      if (response.status == 200) {
        console.log('ADDRESS :', response);
        dispatch({
          type: TYPES.REMOVE_ADDRESS_SUCCESS,
          response,
        });
      }
    } catch (error) {
      dispatch({
        type: TYPES.REMOVE_ADDRESS_FAILURE,
        error,
      });
    }
  };
};

//--------------------CHANGE PASSWORD--------------------
export const changePasswordThunk = (params, token) => {
  return async dispatch => {
    dispatch({type: TYPES.CHANGE_PASSWORD_REQUEST});
    try {
      let response = await axios.post(
        Config.BASE_URL + endPoints.changePassword,
        params,
        {
          headers: {
            Authorization: token,
          },
        },
      );
      if (response.status == 200) {
        console.log('CHANGE PASSWORD :', response);
        dispatch({
          type: TYPES.CHANGE_PASSWORD_SUCCESS,
          response,
        });
      }
    } catch (error) {
      dispatch({
        type: TYPES.CHANGE_PASSWORD_FAILURE,
        error,
      });
    }
  };
};

//--------------------DAYS AND TIMING--------------------
export const daysAndTimingThunk = (params, token) => {
  return async dispatch => {
    dispatch({type: TYPES.DAYS_TIMING_REQUEST});
    try {
      let response = await axios.post(
        Config.BASE_URL + endPoints.daysAndTiming,
        params,
        {
          headers: {
            Authorization: token,
          },
        },
      );
      if (response.status == 200) {
        console.log('DAYS AND TIMING :', response);
        dispatch({
          type: TYPES.DAYS_TIMING_SUCCESS,
          response,
        });
      }
    } catch (error) {
      dispatch({
        type: TYPES.DAYS_TIMING_FAILURE,
        error,
      });
    }
  };
};

export const getdaysAndTimingThunk = (addressId, token) => {
  return async dispatch => {
    dispatch({type: TYPES.GET_DAYS_TIMING_REQUEST});
    try {
      let response = await axios.get(
        Config.BASE_URL + endPoints.daysAndTiming + '/' + addressId,
        {
          headers: {
            Authorization: token,
          },
        },
      );
      if (response.status == 200) {
        console.log('GET DAYS AND TIMING :', response);
        dispatch({
          type: TYPES.GET_DAYS_TIMING_SUCCESS,
          response,
        });
      }
    } catch (error) {
      dispatch({
        type: TYPES.GET_DAYS_TIMING_FAILURE,
        error,
      });
    }
  };
};

//--------------------BUSINESS PHOTOS--------------------
export const getBusinessPhotosThunk = token => {
  return async dispatch => {
    dispatch({type: TYPES.GET_IMAGES_REQUEST});
    try {
      let response = await axios.get(Config.BASE_URL + endPoints.images, {
        headers: {
          Authorization: token,
        },
      });
      if (response.status == 200) {
        console.log('GET BUSINESS PHOTOS :', response);
        dispatch({
          type: TYPES.GET_IMAGES_SUCCESS,
          response,
        });
      }
    } catch (error) {
      dispatch({
        type: TYPES.GET_IMAGES_SUCCESS,
        error,
      });
    }
  };
};

export const postBusinessPhotosThunk = (params, token) => {
  return async dispatch => {
    dispatch({type: TYPES.BUSINESS_IMAGES_REQUEST});
    try {
      let response = await axios.post(
        Config.BASE_URL + endPoints.images,
        params,
        {
          headers: {
            Authorization: token,
          },
        },
      );
      if (response.status == 200) {
        console.log('POST BUSINESS PHOTOS :', response);
        dispatch({
          type: TYPES.BUSINESS_IMAGES_SUCCESS,
          response,
        });
      }
    } catch (error) {
      dispatch({
        type: TYPES.BUSINESS_IMAGES_FAILURE,
        error,
      });
    }
  };
};

export const removeBusinessPhotoThunk = (id, token) => {
  return async dispatch => {
    dispatch({type: TYPES.REMOVE_IMAGE_REQUEST});
    try {
      let response = await axios.delete(Config.BASE_URL + endPoints.images, {
        headers: {
          Authorization: token,
        },
      });
      if (response.status == 200) {
        console.log('REMOVE BUSINESS PHOTO :', response);
        dispatch({
          type: TYPES.REMOVE_IMAGE_SUCCESS,
          response,
        });
      }
    } catch (error) {
      dispatch({
        type: TYPES.REMOVE_IMAGE_FAILURE,
        error,
      });
    }
  };
};
