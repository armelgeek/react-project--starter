import { getData, setData } from '../../../plugins/storage'
import { storageDataPrefix } from '../../../config'
import { mergeSetting } from '../../../config/setting'
//import { changeLanguage } from '@/plugins/i18n'
export const TYPES = {
  updateSetting: null,
  setTheme: null
}
for (const key of Object.keys(TYPES)) {
  TYPES[key] = `common__${key}`
}

const settingKey = storageDataPrefix.setting


export const initSetting = () => async(dispatch, getState) => {
  const setting = await getData(settingKey)
  if (!setting) return
  await dispatch(updateSetting(mergeSetting(setting)))
}

export const updateSetting = setting => async(dispatch, getState) => {
  dispatch({
    type: TYPES.updateSetting,
    payload: setting,
  })
  const { common } = getState()
  await setData(settingKey, common.setting)
}

export const setTheme = id => async(dispatch, getState) => {
  dispatch({
    type: TYPES.setTheme,
    payload: id,
  })
  const { common } = getState()
  await setData(settingKey, common.setting)
}
/**
export const setLang = id => async(dispatch, getState) => {
  dispatch({
    type: TYPES.setLang,
    payload: id,
  })
  changeLanguage(id)
  const { common } = getState()
  await setData(settingKey, common.setting)
}
 */
