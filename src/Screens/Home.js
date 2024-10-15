import React from "react";
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { getAllItems } from "../api/auth";
import { useQuery } from "@tanstack/react-query";
import ProductList from "../Screens/ProductList";
import { useNavigation } from "@react-navigation/native";
import CategoryList from "../Components/CategoryList";

const Home = () => {
  const navigation = useNavigation();
  const { data: items } = useQuery({
    queryKey: ["items"],
    queryFn: getAllItems,
  });

  return (
    <SafeAreaView style>
      <View style={{ margin: 10 }}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="white"
          style={{
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 10,
            padding: 10,
            backgroundColor: "darkorange",
          }}
        />
      </View>
      <CategoryList />

      <ScrollView>
        <ProductList />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default Home;
