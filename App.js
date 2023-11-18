import React,{useEffect} from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import RootNavigator from './app/RootNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;

