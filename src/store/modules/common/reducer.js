import { initSetting } from '../../../config/setting'
import { TYPES } from './action'
const setting = initSetting()
const initialState = {
  ...setting
}
const mutations = {
  [TYPES.updateSetting](state, setting) {
    return {
      ...state,
      setting: {
        ...state.setting,
        ...setting,
      },
    }
  },
  [TYPES.setTheme](state, id) {
    return {
      ...state,
      setting: {
        ...state.setting,
        themeId: id,
      },
    }
  },
}

export default (state = initialState, action) =>
  mutations[action.type]
    ? mutations[action.type](state, action.payload)
    : state
