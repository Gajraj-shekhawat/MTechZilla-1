import { authSignupActionTypes } from "./actiontypes";

const initialState = {
  status: false,
  isLoading: false,
  isError: false,
  errMessage:null
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authSignupActionTypes.REQUEST: {
      return {...state,isLoading:true,isError:false,errMessage:null};
    }
    case authSignupActionTypes.SUCCESS: {
        return {...state,isLoading:false,};
      }
      case authSignupActionTypes.FAILURE: {
        return {...state,isLoading:false,isError:true,errMessage:payload};
      }
    default: {
      return state;
    }
  }
};
