import React from "react";
import DefaultImg from "../assets/placeholder_for_missing_posters.png";

const Cards = ({ data }) => {
  let Image;
  try {
    Image = require(`../assets/${data["poster-image"]}`);
  } catch (err) {
    Image = DefaultImg;
  }
  return (
    <div className="w-[30%] mb-5 ">
      <div>
        <img src={Image} alt="Cards" />
        <div className="mt-2 text-white">{data?.name}</div>
      </div>
    </div>
  );
};

export default Cards;
