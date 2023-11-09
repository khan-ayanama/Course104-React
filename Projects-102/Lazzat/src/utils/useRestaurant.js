import { useState, useEffect } from "react";

const useRestaurant = () => {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);

  const getRestaurant = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.93519229&lng=77.62448069999999"
      );

      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }

      const response = await data.json();

      const restarurantData =
        response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (restarurantData) {
        setRestaurant(restarurantData);
      } else {
        throw new Error("No Restaurant data found in API response!");
      }
    } catch (error) {
      console.error("Error Fetching restaurant Data", error);
    }
  };
  return restaurant;
};
export default useRestaurant;
