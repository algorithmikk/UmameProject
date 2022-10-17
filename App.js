import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import DishDetailsScreen from "./src/screens/DishDetailsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetailsScreen from "./src/screens/RestaurantDetailsScreen";
import Basket  from "./src/screens/Basket";
import OrderScreen from "./src/screens/OrdersScreen";
import OrderDetailsScreen from "./src/screens/OrderDetailsScreen";


export default function App() {
  return (
    <View style={styles.container}>
      {/* Restaurant item */}
      {/* the restaurant props is being injected in the index.js of the restaurant item class, the json is loaded */}
      {/* <RestaurantDetailsScreen/ > */}
      {/* <RestaurantDetailsScreen />  */}
      {/* <HomeScreen /> */}

      {/* <DishDetailsScreen/> */}
      <Basket />

      {/* <OrderDetailsScreen /> */}
      <StatusBar style="light" />
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
