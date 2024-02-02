import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import RootNavigator from './src/routes/RootNavigator';
import { Auth0Provider } from 'react-native-auth0';

const App = () => {
  return (
    <Auth0Provider domain="dev-8rdx61djpfo3i0lr.us.auth0.com" clientId="vRR4gmvplJQzeznHtaebSvjOWnJSnFqw">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
    </Auth0Provider>
  );
};
export default App;