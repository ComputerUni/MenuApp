import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { FOODS } from "../data/dummy-data";

export default function FavoritesScreen() {
  const favoriteIds = useSelector((state) => state.favorite);

  const favoriteFoods = FOODS.filter((food) => favoriteIds.includes(food.id));

  if (favoriteFoods.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Henüz favori eklemedin ❤️</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favoriteFoods}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 30,
  },

  emptyText: {
    fontSize: 18,
    color: "#555",
    fontFamily: "story-script",
    textAlign: "center",
    lineHeight: 24,
    opacity: 0.8,
  },

  card: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginHorizontal: 16,
    marginVertical: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },

  title: {
    fontSize: 18,
    fontFamily: "story-script",
    letterSpacing: 0.5,
    color: "#333",
  },
});
