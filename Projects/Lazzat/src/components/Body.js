import { useState, useEffect } from "react";

const Body = () => {
  const [restaurant, setRestaurant] = useState(null);

  const getRestaurant = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=26.8466937&lng=80.94616599999999"
    );

    const repsonse = await data.json();
    console.log("hello");
    setRestaurant(
      repsonse?.data?.success?.cards[1]?.gridWidget.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(
      repsonse?.data?.success?.cards[1]?.gridWidget.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    getRestaurant();
  }, []);

  return <h1>Hello from body</h1>;
};

export default Body;
