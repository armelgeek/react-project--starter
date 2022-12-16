import api, { apiConfig } from "../../../config/api";
export const TYPES = {
  signin: null,
  signinSuccess: null,
  updateUserFail: null,
  badRequest: null,
  signup: null,
  signUpSuccess: null,
  signOutSuccess: null,
  loadUser: null,
  loadUserSuccess: null,
  loadUserFail: null,
  resetValidateFields: null,
  updateUser: null,
  updateUserSuccess: null,
  activeSession: null,
  loading: null,
};
for (const key of Object.keys(TYPES)) {
  TYPES[key] = `users__${key}`;
}
const setLoading = (payload) => async (dispatch) => {
  dispatch({ type: `loading`, payload: payload });
};
export const signinUser = ({ username, password }) => {
  return async (dispatch) => {
    dispatch({
      type: TYPES.signin,
    });
    dispatch(setLoading(true));
    return api
      .post(`${apiConfig.baseURL}signin`, { username, password })
      .then((response) => {
        dispatch(setLoading(false));
        dispatch(signinUserSuccess(response.content.username));
        dispatch(setToken(response.token));
        // browserHistory.push("/dashboard");
      })
      .catch((error) => {
        dispatch(setLoading(false));
        dispatch(onError(error.response || error));
      });
  };
};
export const activeSession = () => {
  return async (dispatch) => {
    dispatch({
      type: TYPES.activeSession,
    });
  };
};

export function signinUserSuccess(payload) {
  return {
    type: TYPES.signinSuccess,
    payload,
  };
}
export function signupUser({ username, password }) {
  return (dispatch) => {
    dispatch({
      type: TYPES.signup,
    });
    dispatch(setLoading(true));
    api
      .post(`${apiConfig.baseURL}signup`, { username, password })
      .then((response) => {
        dispatch(setLoading(false));
        dispatch(signupUserSuccess(response.content.username));
        setToken(response.token);
        // browserHistory.push('/dashboard');
      })
      .catch((error) => {
        dispatch(setLoading(false));
        dispatch(onError(error.response || error));
      });
  };
}

export function signupUserSuccess(payload) {
  return {
    type: TYPES.signUpSuccess,
    payload,
  };
}

export const signoutUser = () => {
  removeToken();
  return {
    type: TYPES.signOutSuccess,
  };
};

export const getCurrentUser = () => {
  var token = getToken();
  return (dispatch, state) => {
    dispatch({
      type: TYPES.loadUser,
    });
    api
      .get(`${apiConfig.baseURL}user`, null, { "x-access-token": token })
      .then((response) => {
        dispatch(getUserSuccess(response.content));
        dispatch(signinUserSuccess(response.content.username))
      })
      .catch((error) => dispatch(onLoadUserError(error.response || error)));
  };
};

export function getUserSuccess(payload) {
  return {
    type: TYPES.loadUserSuccess,
    payload,
  };
}

export const updateUser = ({ name, username, email }) => {
  var token = getToken();
  return (dispatch, state) => {
    dispatch({
      type: TYPES.updateUser,
    });

    api
      .put(
        `${apiConfig.baseURL}/user`,
        { name, username, email },
        {
          headers: { "x-access-token": token },
        }
      )
      .then((response) =>
        dispatch({
          type: TYPES.updateUserSuccess,
          payload: response.content,
        })
      )
      .catch((error) => dispatch(onUpdateUserError(error.response || error)));
  };
};

export function resetValidateFields() {
  return {
    type: TYPES.resetValidateFields,
  };
}

export const onError = (response) => {
  return {
    type: TYPES.badRequest,
    payload: getErrorMessage(response),
  };
};

export const onLoadUserError = (response) => {
  return {
    type: TYPES.updateUserFail,
    payload: getErrorMessage(response),
  };
};

export const onUpdateUserError = (response) => {
  return {
    type: TYPES.updateUserFail,
    payload: getErrorMessage(response),
  };
};

const getErrorMessage = (response) => {
  let errorMessage;
  if (response.data) {
    errorMessage = response.data;
  } else {
    errorMessage = response;
  }
  return errorMessage;
};

const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

const removeToken = () => {
  localStorage.removeItem("token");
};
