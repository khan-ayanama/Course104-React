import { IMG_CDN } from "../constant";


const RestaurantCard = ({restaurant}) =>{
    const {areaName,avgRating,cuisines,costForTwo,cloudinaryImageId,name} = restaurant?.info;
    const IMG_URL = IMG_CDN+cloudinaryImageId;


    return(
        <div className="restaurant-card">
            <img src={IMG_URL} alt={areaName}/>
            <h2>{name}</h2>
            <p>{cuisines.join(',')}</p>
            <p>Ratings: {avgRating} stars</p>
            <p>City: {areaName}</p>
            <p>Price: {costForTwo}</p>
        </div>
    )
}

export default RestaurantCard;