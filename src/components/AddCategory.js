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
    console.log(Input);
    if (Input.trim().length > 2) {
      setCategory((cat) => [...cat, Input]);
      setInput("");
    }
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <h2>Add Category</h2>
        <input type="text" value={Input} onChange={handleChange} />
      </form>
    </div>
  );
};

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default AddCategory;
