export const authLoginActionTypes = {
  REQUEST: "REQUEST_LOGIN",
  SUCCESS: "SUCCESS_LOGIN",
  FAILURE: "FAILURE_LOGIN",
};
export const authSignupActionTypes = {
  REQUEST: "REQUEST_SIGNUP",
  SUCCESS: "SUCCESS_SIGNUP",
  FAILURE: "FAILURE_SIGNUP",
};
export const fetchUserActionTypes = {
  REQUEST: "REQUEST_USER",
  SUCCESS: "SUCCESS_USER",
  FAILURE: "FAILURE_USER",
};

export const LOGOUTACTION="SUCCESS_LOGOUT"

export const userLogoutaction = () => ({
  type: LOGOUTACTION
});

export const userDataRequest = () => ({
  type: fetchUserActionTypes.REQUEST,
});
export const userDataSuccess = (payload) => ({
  type: fetchUserActionTypes.SUCCESS,
  payload,
});
export const userDataFailure = (payload) => ({
  type: fetchUserActionTypes.FAILURE,
  payload
});


export const loginRequest = () => ({
  type: authLoginActionTypes.REQUEST,
});
export const loginSuccess = (payload) => ({
  type: authLoginActionTypes.SUCCESS,
  payload,
});
export const loginFailure = (payload) => ({
  type: authLoginActionTypes.FAILURE,
  payload
});

export const signupRequest = () => ({
  type: authSignupActionTypes.REQUEST,
});
export const signupSuccess = () => ({
  type: authSignupActionTypes.SUCCESS,
});
export const signupFailure = (payload) => ({
  type: authSignupActionTypes.FAILURE,
  payload
});
