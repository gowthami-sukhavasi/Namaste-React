import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantsInfo();
  }, []);

  async function getRestaurantsInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=17.4981257&lng=78.3860974&menuId=" +
        id
    );
    const json = await data.json();
    setRestaurant(json.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div className="menu-banner">
        <div>
          <img
            src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
            height="165px"
            width="250px"
          />
        </div>
        <div className="menu-banner-text">
          <h4>Restaurant id: {id}</h4>
          <h1>{restaurant?.name} </h1>
          <h3>{restaurant?.area + ", " + restaurant?.city}</h3>
          <h3>{restaurant?.avgRating} stars</h3>
          <h3>{restaurant?.costForTwoMsg}</h3>
        </div>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <div key={item.id} className="menu-item">
              <div>
                <h2>{item?.name} </h2>
                <p>{item?.description}</p>
              </div>
              <div>
                <img
                  src={IMG_CDN_URL + item?.cloudinaryImageId}
                  height="125px"
                  width="160px"
                ></img>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
