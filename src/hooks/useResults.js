import {useState, useEffect} from "react";
import zomato from "../api/zomato";

export default () => {
    const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const searchApi = searchTerm => {
    zomato
      .get("/search", {
        params: {
          q: searchTerm,
          count: 50
        }
      })
      .then(response => {
        setResults(response.data.restaurants);
      })
      .catch(reject => {
        console.log(reject);
        setErrorMessage("Something Went Wrong!");
      });
  };
  useEffect(() => {
    searchApi("pasta");
  }, []);
  
  return [searchApi, results, errorMessage];
}