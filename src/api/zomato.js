import axios from "axios";

export default axios.create({
    baseURL: "https://developers.zomato.com/api/v2.1",
    headers: {
        "user-key": "4a72601aab2cd4dd272dc23706ca081b",
      }
});