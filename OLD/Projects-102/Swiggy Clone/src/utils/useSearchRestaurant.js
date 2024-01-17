import useRestaurant from "./useRestaurant";
import { API_URL } from "../constant";


const useSearchRestaurant = (searchTxt) => {
    const restaurants = useRestaurant(API_URL)
    return restaurants?.filter(restaurant=>{
        if(restaurant?.info?.cuisines?.some(item=>item?.toLowerCase()?.includes(searchTxt?.toLowerCase()))){
            return restaurant;
        }
    })
}

export default useSearchRestaurant;