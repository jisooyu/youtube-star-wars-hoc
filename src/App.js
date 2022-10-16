import { useState, useEffect } from "react";
import StarWars from "./components/StarWars";
import fetchData from "./api/fetchData";
import "./style.css";

function App() {
  const [starWars, setStarWars] = useState([]);

  const getData = async (range) => {
    const data = await fetchData(range);
    setStarWars(data);
  };

  useEffect(() => {
    getData(3);
    // eslint-disable-next-line
  }, []);
  return (
    <div className='App'>
      <StarWars stars={starWars} />
    </div>
  );
}

export default App;
