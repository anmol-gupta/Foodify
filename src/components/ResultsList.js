import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsDeatils from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={result => result.restaurant.id}
        renderItem={({ item }) => {
          return <ResultsDeatils result={item} />;
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

export default ResultsList;
