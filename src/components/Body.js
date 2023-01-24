import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchInput)
  );

  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            // e.target.value => whatever is entered in the input
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // need to filter restaurant list
            const data = filterData(searchText, restaurants);

            //update the state - restaurant variable
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
