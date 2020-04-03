import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import {withNavigation} from "react-navigation"
import ResultsDeatils from "./ResultsDetail";

const ResultsList = ({ title, results, navigation }) => {
    if(!results) {
        return null;
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={result => result.restaurant.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=>{navigation.navigate("Result",{id:item.restaurant.id})}}>
              <ResultsDeatils result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15
  },
  container: {
    marginBottom: 10
  }
});

export default withNavigation(ResultsList);
