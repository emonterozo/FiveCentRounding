import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NativeBaseProvider} from 'native-base';

import Navigation from './src/Navigation/Navigation';
import {GlobalContext} from './src/config/context';

const App = () => {
  const [cart, setCart] = useState([]);

  const initialContext = {
    cart,
    setCart,
  };

  return (
    <GlobalContext.Provider value={initialContext}>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </GlobalContext.Provider>
  );
};

export default App;
