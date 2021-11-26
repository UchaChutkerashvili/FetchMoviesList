import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Homescreen from './screens/HomeScreen';
import Movielist from './screens/Movielist';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Homescreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
         name="Profile"
         component={Movielist}
         options={{ title: 'Movies' }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;