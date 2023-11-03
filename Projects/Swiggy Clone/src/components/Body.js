import RestaurantCard from "./RestaurantCard";
import useRestaurant from "../utils/useRestaurant";
import { API_URL } from "../constant";
import Shimmer from "./Shimmer";
import useSearchRestaurant from "../utils/useSearchRestaurant";
import { useState } from "react";
import { Link } from "react-router-dom";


const Body = () => {

    const [searchTxt, setSearchTxt] = useState('')
    const restaurants = useSearchRestaurant(searchTxt)

    return  (
        <>
            <div className="search-bar container">
            <input
                placeholder="Search Food!!"
                type="text"
                value={searchTxt}
                onChange={(e) => {
                    setSearchTxt(e.target.value)
                }}
            />
            </div>
            {restaurants.length==0?<Shimmer/>:(<div className="restaurants container">
                {restaurants?.map((restaurant)=>{
                    return (
                        <Link to={"/restaurants/"+restaurant?.info?.id} key={restaurant?.info?.id}>
                            <RestaurantCard restaurant={...restaurant} key={restaurant?.info?.id}/>
                        </Link>
                    )
                })}
            </div>)}
        </>
    )
}

export default Body;