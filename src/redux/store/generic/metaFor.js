import typeFor from "./typeFor";
export const metaInitialState = {
  isFetching: false,
  lastUpdatedAt: null,
  error: null,
  success: null,
};
export const metaFor = (resourceName) => {
  const actionTypes = typeFor(resourceName);
  const mutations = {
    [actionTypes.createStart](state, payload) {
      return {
        ...state,
        busy: true,
        error: null,
        success: "",
      };
    },
    [actionTypes.createError](state, payload) {
      return {
        ...state,
        busy: false,
        error: payload.error,
        success: null,
      };
    },
    [actionTypes.createSuccess](state, payload) {
      return {
        ...state,
        ...payload,
        busy: false,
      };
    },
    [actionTypes.createFailed](state, payload) {
      return {
        ...state,
        ...payload,
        busy: false,
      };
    },
    [actionTypes.updateStart](state, payload) {
      return {
        ...state,
        ...payload,
        busy: true,
      };
    },
    [actionTypes.updateError](state, payload) {
      return {
        ...state,
        ...payload,
        busy: false,
      };
    },
    [actionTypes.updateSuccess](state, payload) {
      return {
        ...state,
        ...payload,
        busy: false,
      };
    },
    [actionTypes.updateFailed](state, payload) {
      return {
        ...state,
        ...payload,
        busy: false,
      };
    },
    [actionTypes.destroyStart](state, payload) {
      return {
        ...state,
        ...payload,
        busy: true,
      };
    },
    [actionTypes.destroySuccess](state, payload) {
      return {
        ...payload,
        busy: true,
      };
    },
    [actionTypes.deleteError](state, payload) {
      return {
        ...state,
        ...payload,
        busy: false,
      };
    },
    [actionTypes.destroyFailed](state, payload) {
      return {
        ...state,
        ...payload,
        busy: false,
      };
    },
    [actionTypes.getStart](state, payload) {
      return {
        ...state,
        ...payload,
        busy: true,
      };
    },
    [actionTypes.getSuccess](state, payload) {
      return {
        ...state,
        ...payload,
        busy: false,
      };
    },
    [actionTypes.getError](state, payload) {
      return {
        ...state,
        ...payload,
        busy: false,
      };
    },
    [actionTypes.fetchStart](state, payload) {
      return {
        ...state,
        ...payload,
        busy: true,
      };
    },
    [actionTypes.fetchSuccess](state, payload) {
      return {
        ...state,
        ...payload,
        busy: false,
      };
    },
    [actionTypes.fetchError](state, payload) {
      return {
        ...state,
        ...payload,
        busy: false,
      };
    }
  }
  return mutations;
};
