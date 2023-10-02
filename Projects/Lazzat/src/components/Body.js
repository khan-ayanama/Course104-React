import useRestaurant from "../utils/useRestaurant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const restaurants = useRestaurant();
  console.log(restaurants.length);
  return restaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="restaurant-cards">
      {restaurants?.map((restaurant) => (
        <RestaurantCard {...restaurant} key={restaurant?.info?.id} />
      ))}
    </div>
  );
};

export default Body;
