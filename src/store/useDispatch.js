import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { getExcludeModules } from "./exludes";
import { mergeActions } from "./magick/action";
import * as modules from "./modules";

const defaultAction = () => {};
export default (moduleName, name) => {
  const dispatch = useDispatch();

  // console.log(selector)
  // console.log(moduleName, key)

  return useCallback((...params) => {
    const actions = !getExcludeModules(moduleName)
      ? mergeActions(modules, moduleName)
      : modules[moduleName].action;
    let action;
    if (actions && actions[name]) action = actions[name];
    else {
      console.warn("action not found:", moduleName, name);
      action = defaultAction;
    }
    return dispatch(action(...params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
