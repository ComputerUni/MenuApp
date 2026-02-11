import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function FoodItem({
  id,
  title,
  imageUrl,
  affordability,
  complexity,
}) {
  const navigation = useNavigation();
  const FoodItemHandler = () => {
    navigation.navigate("Detail", {
      foodId: id,
    });
  };
  return (
    <View style={styles.foodItem}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={FoodItemHandler}
      >
        <View style={styles.innerView}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{complexity}</Text>
            <Text style={styles.detailItem}>{affordability}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  foodItem: {
    margin: 15,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 20,
  },
  innerView: {
    padding: 15,
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },

  title: {
    fontSize: 20,
    fontFamily: "story-script",
    textAlign: "center",
    margin: 15,
  },

  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 10,
    fontSize: 12,
    fontFamily: "story-script",
    textAlign: "center",
  },

  pressed: {
    opacity: 0.5,
  },
});
