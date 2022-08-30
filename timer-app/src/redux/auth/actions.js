import {
  loginFailure,
  loginRequest,
  loginSuccess,
  signupFailure,
  signupRequest,
  signupSuccess,
  userDataFailure,
  userDataRequest,
  userDataSuccess,
  userLogoutaction,
} from "./actiontypes";
import axios from "axios";
import { setLocalStorage } from "../../utils/utils";

export const signupUser = (payload, navigate) => (dispatch) => {
  dispatch(signupRequest());
  axios
    .post("https://basic-auth-user.herokuapp.com/user/signup", payload)
    .then(({ data }) => {
      if (!data.isError) {
        dispatch(signupSuccess());
        navigate("/login");
      } else {
        dispatch(signupFailure(data.Message));
      }
    })
    .catch((err) => {
      dispatch(signupFailure(err.message));
    });
};

export const signinUser = (payload) => (dispatch) => {
  dispatch(loginRequest());
  axios
    .post(`https://basic-auth-user.herokuapp.com/user/login`, payload)
    .then(({ data }) => {
      if (!data.isError) {
        setLocalStorage("id", data.id);

        setLocalStorage("status", true);

        dispatch(loginSuccess(data.id));
      } else {
        dispatch(loginFailure(data.message));
      }
    })
    .catch((err) => {
      dispatch(loginFailure(err.message));
    });
};

export const fetchUserData = (id) => (dispatch) => {
  dispatch(userDataRequest());
  axios
    .get(`https://basic-auth-user.herokuapp.com/user/${id}`)
    .then(({ data }) => {
      dispatch(userDataSuccess(data));
    })
    .catch((err) => {
      dispatch(userDataFailure(err.message));
    });
};

export const userLogout=()=>dispatch=>{
  localStorage.clear()
  dispatch(userLogoutaction())
}