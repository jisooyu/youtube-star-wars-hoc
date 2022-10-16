import axios from "axios";
const fetchData = async (range) => {
  let starData = [];
  try {
    for (let id = 1; id <= range; id++) {
      const data = await axios.get(
        `https://akabab.github.io/starwars-api/api/id/${id}.json`
      );
      let result = await data.data;
      starData.push(result);
    }
  } catch (error) {
    console.log("something wrong", error);
  }

  return starData;
};
export default fetchData;
