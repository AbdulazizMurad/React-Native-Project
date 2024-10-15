import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { getAllCategories } from "../api/category";
import { useQuery } from "@tanstack/react-query";
import CategoryCard from "./CategoryCard";

const CategoryList = (setType) => {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });
  return (
    <View style={{ flexDirection: "row" }}>
      <ScrollView horizontal={true}>
        <CategoryCard key={0} name={"All"} setType={setType} />
        {categories?.map((category) => (
          <CategoryCard
            key={category._id}
            name={category.name}
            setType={setType}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryList;
