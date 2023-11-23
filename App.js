// In App.js in a new project

import * as React from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import GetNews from './src/screens/GetNews';
import WebViewComp from './src/components/WebView';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'indigo',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name="Trending News" component={Home} />
        <Stack.Screen name="GetNews" component={GetNews} />
        <Stack.Screen
          name="WebView"
          component={WebViewComp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
