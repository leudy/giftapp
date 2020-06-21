import React from "react";

export const GiftsGrid = ({ criteria }) => {
  //==================================================
  //   Get all gift base on parameter
  //==================================================
  const handleCriteria = async () => {
    try {
      const apiKey = "AzcFdNTOvh1NSCiGtH3RY1yngK4KNFLV";
      const resp = await fetch(
        `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}&q=${criteria}`
      );
      const { data } = await resp.json();

      console.log(data);
    } catch (error) {
      // manejo del error
      console.error(error);
    }
  };

  handleCriteria();

  return <div></div>;
};
