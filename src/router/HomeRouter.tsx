import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { FontAwesome6Icon, OctIcons } from '../components/icons/Icons';
import BuscarPage from '../pages/BuscarPage';
import Home from '../pages/Home';
import { HomeRouterList } from '../types/interfaces/AppRouter';

const Tab = createMaterialBottomTabNavigator<HomeRouterList>();

const HomeRouter = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      labeled={false}
      activeColor={colors.primary}
      barStyle={[
        styles.barStyles,
        {
          backgroundColor: colors.secondaryContainer,
        },
      ]}
      initialRouteName="Home"
      safeAreaInsets={{ top: 0, bottom: 0, left: 0, right: 0 }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <OctIcons name="home" color={color} size={30} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={BuscarPage}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome6Icon name="magnifying-glass" color={color} size={28} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeRouter;

const styles = StyleSheet.create({
  barStyles: {
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
});
