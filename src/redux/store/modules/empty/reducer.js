import { metaFor } from "../../generic/reducerFor";
import { TYPES } from "./action";
const initialState = {};
const mutations = {
  [TYPES.loading](state, isLoading) {
    return {
      ...state,
      isLoading,
    };
  },
};
export default (state = initialState, action) =>
  mutations[action.type]
    ? {
        ...mutations[action.type](state, action.payload),
        ...metaFor("empty")(state, action.payload),
      }
    : state;
