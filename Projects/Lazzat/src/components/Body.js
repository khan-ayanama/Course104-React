import useRestaurant from "../utils/useRestaurant";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const restaurants = useRestaurant();
  console.log("RESTAURATNT", restaurants);

  return (
    <>
      {restaurants?.map((restaurant) => (
        <RestaurantCard {...restaurant} key={restaurant?.info?.id} />
      ))}
    </>
  );
};

export default Body;
