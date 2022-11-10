import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Product from './src/Product';
import HomeScreen from './src/HomeScreen';
import {Provider} from 'react-redux';
import store from './src/Redux/store';
import {View} from 'react-native';
import Cart from './src/Cart';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: 'HomeScreen',
              headerStyle: {
                backgroundColor: '#463FB0',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen name="Product" component={Product} />
          <Stack.Screen
            options={{
              title: 'CartScreen',
              headerStyle: {
                backgroundColor: '#463FB0',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            name="Cart"
            component={Cart}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
