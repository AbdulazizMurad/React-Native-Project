import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthNavigation from "./AuthNavigation";
import ProductNavigation from "./ProductNavigation";
import { Entypo, Ionicons } from "@expo/vector-icons";
import ProfileNavigation from "./ProfileNavigation";
const MainNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={ProductNavigation}
        options={{
          tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Auth"
        component={AuthNavigation}
        options={{
          tabBarIcon: () => <Entypo name="login" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigation}
        options={{
          tabBarIcon: () => <Entypo name="man" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
