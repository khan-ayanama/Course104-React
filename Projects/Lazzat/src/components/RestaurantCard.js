import { IMG_CDN_URL } from "../constant";

const RestaurantCard = ({ info }) => {
  console.log(info);
  const image = IMG_CDN_URL + info.cloudinaryImageId;

  return (
    <>
      <img src={image} alt="" />
      <h2>{info?.name}</h2>
      <p>{info?.cuisines.join(", ")}</p>
      <p>{info?.locality}</p>
      <p>{info?.avgRating} Stars</p>
      <p> {info?.costForTwo}</p>
    </>
  );
};

export default RestaurantCard;
