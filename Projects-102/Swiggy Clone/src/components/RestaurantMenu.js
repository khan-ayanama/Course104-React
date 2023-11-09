import { RES_MENU_URL } from "../constant"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import { IMG_CDN } from "../constant"
import { useParams } from "react-router-dom"

const RestaurantMenu = () => {
    const {id} = useParams()
    const {name,areaName,locality,cloudinaryImageId} = useRestaurantMenu(RES_MENU_URL+id)
  return (
    <div className="restaurant-menu container">
        <h1>Restaurant Menu</h1>
        <div className="menu-content">
          <div className="menu-image">
            <img src={IMG_CDN+cloudinaryImageId} alt="rest"/>
          </div>
          <div className="menu-details">
            <h2>{name}</h2>
            <h3>{areaName}</h3>
            <h3>{locality}</h3>
          </div>
        </div>
    </div>
  )
}

export default RestaurantMenu