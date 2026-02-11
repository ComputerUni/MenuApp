import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FoodIngredients({ data }) {
  return (
    <View>
      {data.map((item, index) => (
        <View key={index}>
          <Text style={styles.ingredients}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  ingredients: {
    fontFamily: "story-script",
    textAlign: "center",
    fontSize: 15,
  },
});
