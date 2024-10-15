import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetails from "../Screens/ProductDetails";
import Home from "../Screens/Home";

const Stack = createNativeStackNavigator();
const ProductNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default ProductNavigation;
