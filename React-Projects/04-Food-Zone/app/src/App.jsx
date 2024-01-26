import { useEffect, useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [foodData, setFoodData] = useState(null);

  const foodDetails = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    setFoodData(data);
  };

  useEffect(() => {
    foodDetails();
  }, []);

  return (
    <>
      <Navbar />
      <Main foodData={foodData} />
    </>
  );
};

export default App;
