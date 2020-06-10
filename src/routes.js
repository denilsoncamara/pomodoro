import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator();

import Welcome from './pages/Welcome';
import Timer from './pages/Timer';
import Complete from './pages/Complete';

const Routes = () => (
  <AppStack.Navigator screenOptions={{ headerShown: false }}>
    <AppStack.Screen name="Welcome" component={Welcome} />
    <AppStack.Screen name="Timer" component={Timer} />
    <AppStack.Screen name="Complete" component={Complete} />
  </AppStack.Navigator>
);

export default Routes;