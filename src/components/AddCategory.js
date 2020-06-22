import React, { useState } from "react";
import PropTypes from "prop-types";
const AddCategory = ({ setCategory }) => {
  const [Input, setInput] = useState("");
  //==================================================
  //   for visualize
  //==================================================
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  //==================================================
  //   menajando el formulario
  //==================================================
  const handlerSubmit = (e) => {
    e.preventDefault();

    if (Input.trim().length > 2) {
      setCategory(Input);
      setInput("");
    }
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          value={Input}
          placeholder="(Buscador / Finder) .... Vegeta, Goku, OnePuch"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default AddCategory;
