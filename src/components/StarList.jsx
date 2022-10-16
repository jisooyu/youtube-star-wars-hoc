import React from "react";

const StarList = ({ star }) => {
  return (
    <div>
      <h1>{star.name}</h1>
      <p>height: {star.height} m</p>
      <p>weight: {star.mass} kg</p>
      <p>gender: {star.gender}</p>
      <p>home: {star.homeworld}</p>
      <img src={star.image} alt={"planet wars"} />
    </div>
  );
};

export default StarList;
