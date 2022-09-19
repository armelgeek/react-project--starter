import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import createStore from "../store";
import { PersistGate } from "redux-persist/integration/react";
class AppStoreProvider extends PureComponent {
  render() {
    const { children } = this.props;

    let { store, persistor } = createStore();

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
