import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import {SafeAreaView} from 'react-native';
import Home from './screens/Home';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <Provider store={store}>
          <Home />
        </Provider>
      </SafeAreaView>
    </>
  );
};

export default App;
