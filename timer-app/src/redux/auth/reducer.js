import { getLocalStorage } from "../../utils/utils";
import {
  authLoginActionTypes,
  authSignupActionTypes,
  fetchUserActionTypes,
  LOGOUTACTION,
} from "./actiontypes";

const initialState = {
  status: getLocalStorage("status") || false,
  isLoading: false,
  isError: false,
  errMessage: null,
  id: getLocalStorage("id") || null,
  user: {},
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authSignupActionTypes.REQUEST: {
      return { ...state, isLoading: true, isError: false, errMessage: null };
    }
    case authSignupActionTypes.SUCCESS: {
      return { ...state, isLoading: false };
    }
    case authSignupActionTypes.FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errMessage: payload,
        id: null,
      };
    }

    case authLoginActionTypes.REQUEST: {
      return { ...state, isLoading: true, isError: false, errMessage: null };
    }
    case authLoginActionTypes.SUCCESS: {
      return { ...state, isLoading: false, status: true, id: payload };
    }
    case authLoginActionTypes.FAILURE: {
      return { ...state, isLoading: false, isError: true, errMessage: payload };
    }

    case fetchUserActionTypes.REQUEST: {
      return { ...state, isLoading: true, isError: false, errMessage: null };
    }
    case fetchUserActionTypes.SUCCESS: {
      return { ...state, isLoading: false, user: payload };
    }
    case fetchUserActionTypes.FAILURE: {
      return { ...state, isLoading: false, isError: true, errMessage: payload };
    }

    case LOGOUTACTION: {
      return {
        status: false,
        isLoading: false,
        isError: false,
        errMessage: null,
        id: null,
        user: {},
      };
    }
    default: {
      return state;
    }
  }
};
