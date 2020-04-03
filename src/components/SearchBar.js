import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backStyle}>
      <FontAwesome name="search" size={30} style={styles.iconStyle} />
      <TextInput
        value={term}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={newTerm => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()}
        style={styles.inputStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backStyle: {
    backgroundColor: "#d7dade",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    alignSelf: "center",
    marginHorizontal: 10
  }
});

export default SearchBar;
