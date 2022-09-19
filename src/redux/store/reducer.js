import { combineReducers } from "redux";

import * as modules from "./modules";
const reducers = {};
for (const [moduleName, { reducer }] of Object.entries(modules)) {
  reducers[moduleName] = reducer;
}
const combinedReducers = combineReducers(reducers);
export { reducers, combinedReducers };
