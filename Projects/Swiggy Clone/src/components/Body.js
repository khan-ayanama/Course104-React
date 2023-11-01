import RestaurantCard from "./RestaurantCard";
import useRestaurant from "../utils/useRestaurant";
import { API_URL } from "../constant";
import Shimmer from "./Shimmer";

const Body = ({prop}) => {
    const restaurants = prop.length == 0 ?useRestaurant(API_URL):prop;
    

    return prop.length !=0? (
        <div className="restaurants container">
            {restaurants?.map((restaurant)=>{
                return <RestaurantCard restaurant={...restaurant} key={restaurant?.info?.id}/>
            })}
        </div>
    ):(
        <Shimmer/>
    )
}

export default Body;