import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { initSubscriber } from './subscriber'
import { combinedReducers } from './reducer'
const { persistStore, persistReducer } = require("redux-persist");
const storage = require("redux-persist/lib/storage").default;
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};
const persistConfig = {
  key: "root",
  whitelist: [],
  storage,
};
const persistedReducer = persistReducer(persistConfig, combinedReducers)
const initializeStore = () => {
  const store = createStore(persistedReducer, bindMiddleware([thunkMiddleware]))
  initSubscriber(store)
  let persistor = persistStore(store)
  return { store, persistor }
}
export default () => {
  return initializeStore()
}
