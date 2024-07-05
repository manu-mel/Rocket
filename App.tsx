import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { StatusBar, View, useColorScheme } from 'react-native';

import { THEME } from './src/theme';
import { SignIn } from './src/screens/SignIn/SignIn';
import { SignUp } from './src/screens/SignUp/SignUp';
import { Loading } from './src/components/Loading/Loading';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <SignUp />
      {/* {true ? <SignIn /> : <Loading />} */}
      <View />
    </NativeBaseProvider>
  );
};

export default App;
