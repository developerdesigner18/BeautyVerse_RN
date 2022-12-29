import * as TYPES from '../constants';
import axios from 'axios';
import {Config} from '../../../config';
import {endPoints} from '../endPoints';

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
      } else {
        dispatch({
          type: TYPES.LOGIN_FAILURE,
          response,
        });
      }
      return response;
    } catch (error) {
      dispatch({
        type: TYPES.LOGIN_FAILURE,
        error,
      });
      return error;
    }
  };
};
