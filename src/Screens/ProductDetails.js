import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getItemById } from "../api/auth";

const { width } = Dimensions.get("window");
const baseUrl = "https://react-native-mini-project-items.eapi.joincoded.com/";

const ProductDetails = ({ route }) => {
  const { id } = route.params;
  const { data: productCard, isLoading } = useQuery({
    queryKey: ["item", id],
    queryFn: () => getItemById(id),
  });

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: baseUrl + productCard?.image }}
          style={styles.image}
        />
        <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">
          {productCard?.name}
        </Text>
        <Text style={styles.price}>${productCard?.price}</Text>
        <Text style={styles.description}>{productCard?.description}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: width * 0.8,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: 8,
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    width: "100%",
  },
  price: {
    fontSize: 16,
    color: "#888",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 16,
    width: "100%",
  },
});

export default ProductDetails;
