import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <small>{cuisines.join(", ")}</small>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};

export default RestaurantCard;
