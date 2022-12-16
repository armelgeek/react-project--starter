import { TYPES } from "./action";
const initialState = {
};
const mutations = {
  [TYPES.loading](state, isLoading) {
    state = { ...state };
    state.isLoading = isLoading;
    return state;
  },
  [TYPES.signup](state, payload) {
    return { ...state, error: null, authenticated: false };
  },
  [TYPES.signin](state, payload) {
    return { ...state, error: null, authenticated: false };
  },
  [TYPES.signinSuccess](state, payload) {
    return { ...state, error: null, username: payload, authenticated: true };
  },
  [TYPES.signUpSuccess](state, payload) {
    return { ...state, error: null, username: payload, authenticated: true };
  },
  [TYPES.activeSession](state, payload) {
    return { ...state, error: null, authenticated: true };
  },
  [TYPES.badRequest](state, payload) {
    return { ...state, error: payload };
  },
  [TYPES.signOutSuccess](state, payload) {
    return { ...state, error: null, username: null, authenticated: false };
  },
  [TYPES.resetValidateFields](state, payload) {
    return { ...state, error: null, messsage: null };
  },
  [TYPES.loadUser](state, payload) {
    return { ...state, data: {} };
  },
  [TYPES.loadUserSuccess](state, payload) {
    return {
      ...state,
      data: payload,
      authenticated: true,
      error: null,
      messsage: null,
    };
  },
  [TYPES.loadUserFail](state, payload) {
    return { ...state, error: payload, authenticated: false, messsage: null };
  },
  [TYPES.updateUser](state, payload) {
    return { ...state, data: {} };
  },
  [TYPES.updateUserSuccess](state, payload) {
    return {
      ...state,
      data: payload,
      error: null,
      messsage: "Your profile has been successfully updated",
    };
  },
  [TYPES.updateUserFail](state, payload) {
    return { ...state, error: payload, messsage: null };
  },
};
export default (state = initialState, action) =>
  mutations[action.type]
    ? mutations[action.type](state, action.payload)
    : state;
