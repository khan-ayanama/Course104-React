import { useState, useEffect } from "react";

const useRestaurant = () => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurant();
  }, []);

  const getRestaurant = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.93519229&lng=77.62448069999999"
    );

    const repsonse = await data.json();
    const restarurantData =
      repsonse?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRestaurant(restarurantData);
  };

  return restaurant;
};
export default useRestaurant;
