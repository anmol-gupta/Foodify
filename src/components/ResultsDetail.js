import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultDetail = ({result}) => {
  return (
    <View style={styles.container}>
        <Image source={{uri:result.restaurant.thumb}} style={styles.image}/>
      <Text style={styles.name}>{result.restaurant.name}</Text>
      <Text>{result.restaurant.user_rating.aggregate_rating} Rating, {result.restaurant.user_rating.votes} Votes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    image: {
        borderRadius: 4,
        width: 250,
        height: 150,
        marginBottom: 5
    },
    name: {
        fontWeight: "bold",
        fontSize: 15
    },
    container: {
        marginLeft: 15
    }
});

export default ResultDetail;
