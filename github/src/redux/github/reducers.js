import { githubActions } from "./actions";

const init = {
  isLoading: false,
  isError: false,
  data: null,
  errMessgae:null
};

export const githubReducer = (state = init, { type, payload }) => {
  switch (type) {
    case githubActions.REQUEST: {
      return {...state,isLoading:true,isError:false}
    }
    case githubActions.SUCCESS: {
        return {...state,isLoading:false,data:payload}
      }
      case githubActions.FAILURE: {
        return {...state,isLoading:false,isError:true,errMessgae:payload}
      }
    default: {
      return state;
    }
  }
};
