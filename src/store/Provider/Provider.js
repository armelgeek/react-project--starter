import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import createStore from "../store";
import { PersistGate } from "redux-persist/integration/react";
import {
  getToken,
  getCurrentUser,
  activeSession,
} from "../modules/users/action";
class AppStoreProvider extends PureComponent {
  render() {
    const { children } = this.props;
    let { store, persistor } = createStore();
    const token = getToken();
    if (token) {
      store.dispatch(activeSession());
      store.dispatch(getCurrentUser());
    }
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    );
  }
}

export default AppStoreProvider;
