import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FoodOverviewScreen from "./screens/FoodOverviewScreen";
import FoodDetailScreen from "./screens/FoodDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import { Provider } from "react-redux";
import { store } from "./store/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#F2F2F7" },
      }}
    >
      <Drawer.Screen
        options={{
          drawerIcon: () => <Feather name="list" size={24} color="black" />,
          title: "Kategoriler",
        }}
        name="Categories"
        component={CategoriesScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <MaterialIcons name="favorite-border" size={24} color="black" />
          ),
          title: "Favorilerim",
        }}
        name="Favorites"
        component={FavoritesScreen}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "story-script": require("./assets/fonts/StoryScript-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null; // font yüklenmeden render etme
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="dark" backgroundColor="#fff" />
        <Stack.Navigator
          screenOptions={{
            contentStyle: {
              backgroundColor: "#F2F2F7",
            },
            headerStyle: { backgroundColor: "#F2F2F7" },
          }}
        >
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Drawer"
            component={DrawerNavigator}
          />
          <Stack.Screen name="Food" component={FoodOverviewScreen} />
          <Stack.Screen
            options={{ headerTitle: "İçerik" }}
            name="Detail"
            component={FoodDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
