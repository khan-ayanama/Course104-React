import { IMG_CDN_URL } from "../constant";

const RestaurantCard = ({ info }) => {
  const image = IMG_CDN_URL + info.cloudinaryImageId;

  return (
    <div className="restaurant-card">
      <img src={image} alt="" />
      <h2>{info?.name}</h2>
      <p>{info?.cuisines.slice(0, 5).join(", ")}</p>
      <p>{info?.locality}</p>
      <p>{info?.avgRating} Stars</p>
      <p> {info?.costForTwo}</p>
    </div>
  );
};

export default RestaurantCard;
