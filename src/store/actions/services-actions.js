import * as TYPES from '../constants';
import axios from 'axios';
import {Config} from '../../../config';
import {endPoints} from '../endPoints';

//--------------------Add Service Info--------------------
export const addServiceInfoThunk = (params, token) => {
  return async dispatch => {
    dispatch({type: TYPES.ADD_SERVICE_REQUEST});
    try {
      let response = await axios.post(
        Config.BASE_URL + endPoints.serviceInfo,
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
        type: TYPES.ADD_SERVICE_FAILURE,
        error,
      });
    }
  };
};
