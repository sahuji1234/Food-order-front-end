import React from "react";
import RestaurantCard from '../Restaurant/RestaurantCard'
const Favourites = () => {
  return (
    <div>
      <h1 className="py-5 text-xl font-semitbold text-center">My Favourites</h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {
          [1,1,1].map((item)=><RestaurantCard/>)
        }
      </div>
    </div>
  );
};

export default Favourites;
