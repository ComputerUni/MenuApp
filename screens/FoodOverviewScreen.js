import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useLayoutEffect } from "react";
import { FOODS, CATEGORIES } from "../data/dummy-data";
import FoodItem from "../components/FoodItem";

export default function FoodOverviewScreen({ route, navigation }) {
  //Navigate edilirken gönderilen params içinden categoryId’yi al
  const categoryId = route.params.categoryId;
  //FOODS içerisindeki foodItem'ın categoryIds'i varsa ve 0'dan eşit veya büyükse bizim categoryId olarak çektiğimiz idler ile eşleştir.
  //Bu sayede yiyeceklerin bilgisini çekeceğiz.
  const displayedFoods = FOODS.filter((foodItem) => {
    return foodItem.categoryIds.indexOf(categoryId) >= 0;
  });

  const categoryTitle = CATEGORIES.find(
    (category) => category.id === categoryId
  ).title;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryTitle]);

  function renderFoodItem(itemData) {
    const foodItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      affordability: itemData.item.affordability,
      complexity: itemData.item.complexity,
    };
    return <FoodItem {...foodItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedFoods}
        keyExtractor={(item) => item.id}
        renderItem={renderFoodItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});
