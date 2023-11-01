import { useState } from "react";
import { useEffect } from "react";

const useRestaurant = (API_URL) => {

    const [restaurants, setRestaurant] = useState([])

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        try {
            const response = await fetch(API_URL)
            const result = await response.json()

            const restaurantData = result?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setRestaurant(restaurantData)
            // console.log(result?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        } catch (error) {
            console.log(error)
        }
    }



    return restaurants;
}

export default useRestaurant;