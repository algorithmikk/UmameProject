import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetailsScreen from "./src/screens/RestaurantDetailsScreen";


export default function App() {
  return (
    <View style={styles.container}>
      {/* Restaurant item */}
      {/* the restaurant props is being injected in the index.js of the restaurant item class, the json is loaded */}
      <RestaurantDetailsScreen/ >
      {/* <HomeScreen /> */}
  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingVertical: 30,
  },
});
