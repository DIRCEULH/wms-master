import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Settings from './pages/Settings';
import Index from './pages/Index';
import PalletReceivement from './pages/PalletReceivement';
import PalletAddress from './pages/PalletAddress';
import QueryAddressFreedom from './pages/QueryAddressFreedom';
import QueryAddressProducts from './pages/QueryAddressProducts';
import QueryProdutcsAddress from './pages/QueryProdutcsAddress';
import PalletReprint from './pages/PalletReprint';
import AddressPrint from './pages/AddressPrint';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="PalletReceivement" component={PalletReceivement} />
      <Stack.Screen name="PalletAddress" component={PalletAddress} />
      <Stack.Screen name="QueryAddressFreedom" component={QueryAddressFreedom} />
      <Stack.Screen name="QueryAddressProducts" component={QueryAddressProducts} />
      <Stack.Screen name="QueryProdutcsAddress" component={QueryProdutcsAddress} />
      <Stack.Screen name="PalletReprint" component={PalletReprint} />
      <Stack.Screen name="AddressPrint" component={AddressPrint} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
