import React, { useState } from "react";
import AddCategory from "./AddCategory";
import { GiftsGrid } from "./Gifts/GiftsGrid";
export const GifApp = () => {
  const [category, setcategory] = useState("Goku");

  return (
    <div>
      <div style={{ textAlign: "center", fontSize: "3rem" }}>
        <h2>GiftApp</h2>
      </div>
      <p>Developed by Leudi Rosario C.</p>
      <hr />
      <AddCategory setCategory={setcategory}></AddCategory>
      <GiftsGrid criteria={category}></GiftsGrid>
    </div>
  );
};
