import { signupFailure, signupRequest, signupSuccess } from "./actiontypes";
import axios from "axios";


export const signupUser = (payload,navigate) => (dispatch) => {
   
  dispatch(signupRequest())
  axios
    .post("https://basic-auth-user.herokuapp.com/user/signup", payload)
    .then(({data}) => {
      if(!data.isError){
        dispatch(signupSuccess())
        navigate('/login')
      }else{
        dispatch(signupFailure(data.Message))
      }
    }).catch(err=>{
        dispatch(signupFailure(err.message))
    })
};
