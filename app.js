import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'react-native/scr/screens/HomeScreen';
import FormScreen from 'react-native/scr/screens/FormScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Batsignal' }} />
        <Stack.Screen name="Form" component={FormScreen} options={{ title: 'Report Your Issue' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
