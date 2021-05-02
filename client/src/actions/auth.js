//import api from '../utils/api';
import axios from 'axios'
import { toast } from 'react-toastify';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  //USER_LOADED,
  //AUTH_ERROR,
  //LOGIN_SUCCESS,
  //LOGIN_FAIL,
  //LOGOUT
} from './types';


// Register User
export const register = ({ name, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post('/api/users', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => toast(error.msg));
    }
    toast('register fails');
    dispatch({
      type: REGISTER_FAIL
    });
  }
};


