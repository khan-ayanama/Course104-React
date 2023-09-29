import useRestaurant from "../utils/useRestaurant";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const restaurants = useRestaurant();
  return (
    <div className="restaurant-cards">
      {restaurants?.map((restaurant) => (
        <RestaurantCard {...restaurant} key={restaurant?.info?.id} />
      ))}
    </div>
  );
};

export default Body;
