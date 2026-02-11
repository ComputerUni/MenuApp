import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { FOODS } from "../data/dummy-data";
import FoodIngredients from "../components/FoodIngredients";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/favoriteSlice";

export default function FoodDetailScreen({ route, navigation }) {
  const foodId = route.params.foodId;
  const selectedFood = FOODS.find((food) => food.id === foodId);

  const dispatch = useDispatch();
  const favoriteIds = useSelector((state) => state.favorite);

  const isFavorite = favoriteIds.includes(foodId);

  const pressHandler = () => {
    if (isFavorite) {
      dispatch(removeFavorite(foodId));
    } else {
      dispatch(addFavorite(foodId));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={pressHandler}
          style={({ pressed }) => pressed && styles.pressed}
        >
          <MaterialIcons
            name={isFavorite ? "favorite" : "favorite-border"}
            size={24}
            color={isFavorite ? "red" : "black"}
          />
        </Pressable>
      ),
    });
  }, [navigation, isFavorite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedFood.imageUrl }} />
      <Text style={styles.title}>{selectedFood.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{selectedFood.complexity}</Text>
        <Text style={styles.detailItem}>{selectedFood.affordability}</Text>
      </View>
      <View>
        <View>
          <Text style={styles.ingredients}>İçindekiler</Text>
        </View>
        <FoodIngredients data={selectedFood.ingredients} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },

  image: {
    width: "92%",
    height: 220,
    alignSelf: "center",
    marginTop: 15,
    borderRadius: 20,
  },

  title: {
    fontFamily: "story-script",
    fontSize: 24,
    textAlign: "center",
    marginTop: 15,
    letterSpacing: 1,
    color: "#333",
  },

  details: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  detailItem: {
    marginHorizontal: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontSize: 13,
    fontFamily: "story-script",
    backgroundColor: "#E8F0FE",
    borderRadius: 20,
    overflow: "hidden",
  },

  ingredients: {
    fontFamily: "story-script",
    textAlign: "center",
    fontSize: 20,
    marginTop: 15,
    marginBottom: 10,
    color: "#444",
  },

  pressed: {
    opacity: 0.5,
  },
});
