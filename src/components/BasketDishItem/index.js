import { View, Text, StyleSheet, FlatList } from "react-native";

import restaurants from "../../../assets/data/restaurants.json";
const restaurant = restaurants[0];

const BasketDishItem = ({ basketDish }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={styles.name}>{basketDish.name}</Text>
      <Text style={{ marginLeft: "auto" }}>$ {basketDish.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
 
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  quantityContainer: {
    backgroundColor: "lightgray",
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 10,
    margin: 3,
  },
});

export default BasketDishItem;
