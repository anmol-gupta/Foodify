import React, { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import useResults from "../hooks/useResults";
const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  const filterResultsByPrice = price => {
    return results.filter(result => {
      return (
        result.restaurant.average_cost_for_two <= price &&
        result.restaurant.average_cost_for_two > price - 200
      );
    });
  };
  return (
    // <View style={{flex:1}}>
    <>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage != "" ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice(200)}
          title="Cost Effective"
        />
        <ResultsList
          results={filterResultsByPrice(500)}
          title="Bit Pricier"
        />
        <ResultsList
          results={filterResultsByPrice(700)}
          title="Big Splender"
        />
      </ScrollView>
      {/* </View> */}
    </>
  );
};

export default SearchScreen;
