import { combineReducers } from "redux";
import {mergeReducers} from './magick/reducer';
import * as modules from "./modules";
const reducers = {};
for (const [moduleName,{ reducer}] of Object.entries(modules)) {
	reducers[moduleName] = mergeReducers(moduleName,reducer.initialState,reducer.mutations);
}
const combinedReducers = combineReducers(reducers);
export { reducers, combinedReducers };
