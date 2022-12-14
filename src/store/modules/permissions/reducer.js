import { TYPES } from "./action";
const initialState = {
  activeIndex: 0,
  roles: [
    { id: 1, name: "VIEWER", permissions: [] },
    { id: 2, name: "EDITOR", permissions: [] },
    { id: 3, name: "OWNER", permissions: [] },
  ],
};
const mutations = {
  [TYPES.setRoleActiveIndex](state, index) {
    if (index === state.activeIndex) return state;
    return {
      ...state,
      activeIndex: index,
    };
  },
  [TYPES.setPermissions](state, payload) {
    state = { ...state };
    state.roles[state.activeIndex].permissions = payload;
    return state;
  },
};
export default (state = initialState, action) =>
  mutations[action.type]
    ? mutations[action.type](state, action.payload)
    : state;
