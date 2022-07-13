import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import rootSaga from './src/sagas';
import 'react-native-gesture-handler';
import {store, persistor, sagaMiddleware} from './src/store/createStore';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {navigationService, Navigator} from './src/main/Navigation';
import {NativeBaseProvider} from 'native-base';

sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationService.init}>
          <SafeAreaProvider>
            <NativeBaseProvider>
              <Navigator />
            </NativeBaseProvider>
          </SafeAreaProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
