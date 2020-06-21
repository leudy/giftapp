import React, { useState } from "react";
import AddCategory from "./AddCategory";

export const GifApp = () => {
  const [category, setcategory] = useState(["Lunes", "Martes", "Miercoles"]);

  // const handleAdd = (e) => {
  //   setcategory([...category, "Jueves"]);
  // };

  return (
    <div>
      <h2>GifApp</h2>
      <hr /> <AddCategory setCategory={setcategory}></AddCategory>
      <ol>
        {category.map((ca) => {
          return <li key={ca}>{ca}</li>;
        })}
      </ol>
    </div>
  );
};
