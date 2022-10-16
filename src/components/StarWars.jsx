import React from "react";
import StarList from "./StarList";

const StarWars = ({ ...props }) => {
  return (
    <>
      <h1>Star Wars Characters</h1>
      <div className='grid'>
        {props.stars.map((star) => (
          <StarList key={star.id} star={star} />
        ))}
      </div>
    </>
  );
};

export default StarWars;
