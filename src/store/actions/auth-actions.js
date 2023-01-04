import * as TYPES from '../constants';
import axios from 'axios';
import {Config} from '../../../config';
import {endPoints} from '../endPoints';

//--------------------Signup--------------------
export const signupThunk = params => {
  return async dispatch => {
    dispatch({type: TYPES.SIGN_UP_REQUEST});
    try {
      let response = await axios.post(
        Config.BASE_URL + endPoints.singup,
        params,
      );
      if (response.status == 200) {
        console.log('SINGUP :', response);
        dispatch({
          type: TYPES.SIGN_UP_SUCCESS,
          response,
        });
      }
    } catch (error) {
      dispatch({
        type: TYPES.SIGN_UP_FAILURE,
        error,
      });
    }
  };
};

//--------------------Verify OTP--------------------
export const verifyOTPThunk = params => {
  return async dispatch => {
    dispatch({type: TYPES.OTP_VERIFY_REQUEST});
    try {
      let response = await axios.post(
        Config.BASE_URL + endPoints.verifyOTP,
        params,
      );
      if (response.status == 200) {
        console.log('VERIFY OTP :', response);
        dispatch({
          type: TYPES.OTP_VERIFY_SUCCESS,
          response,
        });
      }
    } catch (error) {
      dispatch({
        type: TYPES.OTP_VERIFY_FAILURE,
        error,
      });
    }
  };
};

//--------------------Login--------------------
export const loginThunk = params => {
  return async dispatch => {
    dispatch({type: TYPES.LOGIN_REQUEST});
    try {
      let response = await axios.post(
        Config.BASE_URL + endPoints.login,
        params,
      );
      if (response.status == 200) {
        dispatch({
          type: TYPES.LOGIN_SUCCESS,
          response,
        });
      }
    } catch (error) {
      dispatch({
        type: TYPES.LOGIN_FAILURE,
        error,
      });
    }
  };
};

//--------------------Forgot Password--------------------
export const forgotPassThunk = params => {
  return async dispatch => {
    dispatch({type: TYPES.FORGOT_PASSWORD_REQUEST});
    try {
      let response = await axios.post(
        Config.BASE_URL + endPoints.forgotPassword,
        params,
      );
      if (response.status == 200) {
        console.log('FORGOT PASSWORD :', response);
        dispatch({
          type: TYPES.FORGOT_PASSWORD_SUCCESS,
          response,
        });
      }
    } catch (error) {
      dispatch({
        type: TYPES.FORGOT_PASSWORD_FAILURE,
        error,
      });
    }
  };
};

//--------------------Reset Password--------------------
export const resetPassThunk = (params, token) => {
  return async dispatch => {
    dispatch({type: TYPES.RESET_PASSWORD_REQUEST});
    try {
      let response = await axios.post(
        Config.BASE_URL + endPoints.resetPassword,
        params,
        {
          headers: {
            Authorization: token,
          },
        },
      );
      if (response.status == 200) {
        console.log('RESET PASSWORD :', response);
        dispatch({
          type: TYPES.RESET_PASSWORD_SUCCESS,
          response,
        });
      }
    } catch (error) {
      dispatch({
        type: TYPES.RESET_PASSWORD_FAILURE,
        error,
      });
    }
  };
};
