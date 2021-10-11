import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './src/navigation/Tabs';
// import { Navigator } from './src/navigation/Navigator';

export default function App() {
  return (
    <NavigationContainer>
      {/* <Navigator /> */}
      <Tabs />
    </NavigationContainer>
  );
}
