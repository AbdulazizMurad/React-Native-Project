import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllItems } from "../api/auth";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const numColumns = 2;
const cardWidth = (width - 40) / numColumns;
const baseUrl = "https://react-native-mini-project-items.eapi.joincoded.com/";

const ProductList = () => {
  const { data: items } = useQuery({
    queryKey: ["items"],
    queryFn: getAllItems,
  });

  const navigation = useNavigation();

  return (
    <View>
      <Text
        style={{ fontSize: 20, fontWeight: "bold", margin: 10, marginLeft: 15 }}
      >
        Products
      </Text>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.grid}>
          {items?.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              onPress={() =>
                navigation.navigate("ProductDetails", {
                  id: item._id,
                  name: item.name,
                  image: item.image,

                  price: item.price,
                  description: item.description,
                })
              }
            >
              <Image
                source={{ uri: baseUrl + item.image }}
                style={styles.image}
              />
              <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                {item.name}
              </Text>
              <Text style={styles.price}>${item.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: cardWidth,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: cardWidth - 16,
    height: cardWidth - 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 4,
    width: "100%",
  },
  price: {
    fontSize: 12,
    color: "#888",
  },
});

export default ProductList;
