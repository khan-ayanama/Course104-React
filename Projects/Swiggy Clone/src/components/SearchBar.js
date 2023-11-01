import useRestaurant from "../utils/useRestaurant";
import useSearchRestaurant from "../utils/useSearchRestaurant";
import { API_URL } from "../constant";
import { useState } from "react";
import Body from "./Body";

// const filterRestaurant = (searchTxt, restaurants) => {
//     return restaurants.filter(restaurant=>{
//         if(restaurant.info.cuisines.some(item=>item.toLowerCase().includes(searchTxt))){
//             return restaurant;
//         }
//     })
// }

const SearchBar = () => {
    const [searchTxt, setSearchTxt] = useState('')
    // console.log(searchTxt)
    const searchedElement = useSearchRestaurant(searchTxt)
//    { <Body prop={searchedElement}/>}

    // console.log(searchedElement)
    // const restaurants = useRestaurant(API_URL)
    // const ans = filterRestaurant('ind', restaurants)
    // console.log("ANSWER IS ..",ans)

    return (
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
            <input className="search-btn" type="submit" value="Search" />
        </div>
        <Body prop={searchedElement}/>
        </>
    )
}

export default SearchBar;