import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./productAdd.css";
import { Select } from "./Select";

export const ProductAdd = ({ onCreate }) => {
  const initSelection = {
    size: "",
    height: "",
    width: "",
    length: "",
    weight: "",
  };
  const initForm = {
    sku: "",
    name: "",
    price: 0,
    ...initSelection,
  };
  const [formState, setFormState] = useState(initForm);
  const [selection, setSelection] = useState("None");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ ...formState, type: selection });
    setFormState(initForm);
    setSelection("None");
  };

  const onInputsChanged = (event, key) => {
    setFormState((prevState) => ({ ...prevState, [key]: event.target.value }));
  };
  const updateSelection = (event) => {
    setFormState((prevState) => ({ ...prevState, ...initSelection }));
    setSelection(event.target.value);
  };
  useEffect(() => {}, [formState]);

  return (
    <div className="product-add">
      <div className="product">
        <h1>Product Add</h1>
        <div>
          <button className="add" onClick={handleSubmit}>
            <Link to="/">Save</Link>
          </button>
          <button className="del">
            {" "}
            <Link to="/">Cancel </Link>
          </button>
        </div>
      </div>

      <form>
        <div className="form">
          <label>SKU:</label>
          <input
            value={formState.sku}
            name="sku"
            onChange={(e) => onInputsChanged(e, "sku")}
            required
          />
        </div>
        <div className="form">
          <label>Name:</label>
          <input
            value={formState.name}
            onChange={(e) => onInputsChanged(e, "name")}
            required
            name="name"
          />
        </div>
        <div className="form">
          <label>Price ($):</label>
          <input
            type="number"
            value={formState.price}
            onChange={(e) => onInputsChanged(e, "price")}
            name="price"
          />
        </div>

        <h2>Please, Select Category</h2>

        <select
          className="select"
          value={selection}
          onChange={(e) => updateSelection(e)}
        >
          <option value="None">Choose..</option>
          <option value="dvd">DVD-disc</option>
          <option value="book">Book</option>
          <option value="furniture">Furniture</option>
        </select>

        <Select
          value={selection}
          setFormState={setFormState}
          formState={formState}
        />
      </form>
    </div>
  );
};
