import { View, Text } from "react-native";
import React from "react";
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileNavigation from "./ProfileNavigation";

const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Profile" component={ProfileNavigation} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
