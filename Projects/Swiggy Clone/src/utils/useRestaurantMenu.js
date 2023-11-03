import { useState } from "react";
import { useEffect } from "react";

const useRestaurantMenu = (API_URL) => {

    const [restaurantMenu, setRestaurantMenu] = useState([])

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        try {
            const response = await fetch(API_URL)
            const result = await response.json()
            
            const restaurantMenu = result?.data?.cards[0]?.card?.card?.info;
            setRestaurantMenu(restaurantMenu)
        } catch (error) {
            console.log(error)
        }
    }



    return restaurantMenu;
}

export default useRestaurantMenu;