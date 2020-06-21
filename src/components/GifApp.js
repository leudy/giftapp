import React, { useState } from "react";
import AddCategory from "./AddCategory";
import {GiftsGrid}  from './Gifts/GiftsGrid'
export const GifApp = () => {
  const [category, setcategory] = useState(["Goku"]);

  // const handleAdd = (e) => {
  //   setcategory([...category, "Jueves"]);
  // };

  return (
    <div>
      <h2>GifApp</h2>
      <hr /> 
      <AddCategory setCategory={setcategory}></AddCategory>
        <GiftsGrid  criteria={category[0]}></GiftsGrid>
    </div>
  );
};
