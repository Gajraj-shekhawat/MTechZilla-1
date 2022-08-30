import axios from "axios";
export const githubActions = {
  SUCCESS: "SUCCESS",
  REQUEST: "REQUEST",
  FAILURE: "FAILURE",
};

export const githubRequest = () => ({
  type: githubActions.REQUEST,
});
export const githubSuccess = (payload) => ({
  type: githubActions.SUCCESS,
  payload,
});
export const githubFailure = (payload) => ({
  type: githubActions.FAILURE,
  payload,
});

export const fetchData = (user) => (dispatch) => {
  dispatch(githubRequest());
  axios
    .get(`https://api.github.com/users/${user}`)
    .then(({ data }) => {
      dispatch(githubSuccess(data))
    })
    .catch((err) => {
      dispatch(githubFailure(err.message));
    });
};


