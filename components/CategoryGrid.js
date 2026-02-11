import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

export default function CategoryGrid({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={onPress}
      >
        <View style={[styles.insideView, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    elevation: 4,
    margin: 15,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    height: 150,
    borderRadius: 20,
    backgroundColor: "white",
  },

  button: {
    flex: 1,
  },

  pressed: {
    opacity: 0.5,
  },

  title: {
    fontFamily: "story-script",
    fontSize: 16,
    color: "#1C1C1E",
  },

  insideView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
