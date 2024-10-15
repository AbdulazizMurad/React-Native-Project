import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import React from "react";

const CategoryCard = ({ name, setType }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: "darkorange",
          color: "white",
          width: 150,
          margin: 10,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "black",
        }}
        onPress={() => {
          name == "All" ? setType("") : setType(name);
        }}
      >
        <Text
          style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
        >
          {name}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CategoryCard;
