import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddEmployeeScreen from './AddEmployeScreen';
import NoEmployeeScreen from './NoEmployeeScreen';
import DetailScreen from './DetailScreen';
import DemoScreen from './Screen'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSemanticDiagnosticsBuilderProgram } from 'typescript';


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const navigation = useNavigation()
  const [initial, setInitial] = ('NoEmployee');
  console.log(initial, 'iniitial');

  const data1 = AsyncStorage.getItem('firstName');
  return (
    <Stack.Navigator
      // initialRouteName={data1 ? 'DetailScreen' : 'NoEmployee'}
      initialRouteName={'DemoScreen'}
    >
      <Stack.Screen
        name="DemoScreen"
        component={DemoScreen}
        options={{

          headerShown: false,
          title: 'DemoScreen',
          headerBackTitle: 'back',
          headerTitleAlign: 'center',
          headerBackVisible: 'true',
          
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }}
      />
      <Stack.Screen
        name="AddEmployee"
        component={AddEmployeeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NoEmployee" component={NoEmployeeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailScreen" component={DetailScreen}
        options={{
          headerShown: true,
          title: 'Details',
          headerStyle: {
            backgroundColor: '#7cfc00',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;