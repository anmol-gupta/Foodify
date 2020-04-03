import React, { useState } from "react";
import { Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import zomato from "../api/zomato";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const searchApi = () => {
    zomato
      .get("/search", {
        params: {
          q: term,
          count: 50
        }
      })
      .then(response => {
        setResults(response.data.restaurants);
      })
      .then(error => setErrorMessage("Something Went Wrong!"));
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={searchApi}
      />
      {errorMessage !== "" ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results.</Text>
    </View>
  );
};

export default SearchScreen;
