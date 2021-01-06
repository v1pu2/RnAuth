import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Bpage1 from './DrawerScreens/Bpage1';
import Bpage2 from './DrawerScreens/Bpage2';

const BottomTab = createBottomTabNavigator();

const BottomTabStack = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: '#307ecc',
        },
        labelStyle: {
          textAlign: 'center',
          marginBottom: 20,
          fontSize: 16,
        },
        indicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
        },
      }}>
      <BottomTab.Screen
        name="BPage1"
        component={Bpage1}
        options={{
          tabBarLabel: 'page 1',
        }}
      />
      <BottomTab.Screen
        name="BPage2"
        component={Bpage2}
        options={{
          tabBarLabel: 'page 2',
        }}
      />
    </BottomTab.Navigator>
  );
};
export default BottomTabStack;
