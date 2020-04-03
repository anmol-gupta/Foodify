import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import zomato from "../api/zomato";
import { FlatList } from "react-native-gesture-handler";
const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");
  const getResult = id => {
    zomato
      .get("/restaurant", {
        params: {
          res_id: id
        }
      })
      .then(response => setResult(response.data))
      .catch(error => console.log(error));
  };
  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }
//   console.log(">>>>>>>>>>>>>>>>"+result.photos)
  return (
    <View style={styles.container}>
      <Text style={{fontSize:26,fontWeight:'bold',marginVertical:10}}>{result.name}</Text>
      <Image source={{uri:result.featured_image}} style={styles.image}/>
      <Text style={{fontWeight:'bold',marginBottom:5}}>Address: {result.location.address}</Text>
      <Text style={{fontWeight:'bold',marginBottom:5}}>Timings: {result.timings}</Text>
      <Text style={{fontWeight:'bold'}}>Contact: {result.phone_numbers}</Text>
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
    container: {
        marginHorizontal: 10
    }
});

export default ResultShowScreen;
