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

export const loginRequest = () => ({
  type: authLoginActionTypes.REQUEST,
});
export const loginSuccess = (payload) => ({
  type: authLoginActionTypes.SUCCESS,
  payload,
});
export const loginFailure = () => ({
  type: authLoginActionTypes.FAILURE,
});

export const signupRequest = () => ({
  type: authSignupActionTypes.REQUEST,
});
export const signupSuccess = () => ({
  type: authSignupActionTypes.SUCCESS,
});
export const signupFailure = () => ({
  type: authSignupActionTypes.FAILURE,
});
