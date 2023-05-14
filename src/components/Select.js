import React from "react";

export const Select = ({ value, setFormState, formState }) => {
  const getValues = (e, key) => {
    setFormState((prevSate) => ({ ...prevSate, [key]: e.target.value }));
  };

  return (
    <div className="select">
      {value === "dvd" && (
        <div>
          <div className="select_content">
          <label>Size</label>
          <input
            value={formState.size}
            type="number"
            onChange={(e) => getValues(e, "size")}
            name="size"
          />
          </div>
          <h3>*Please, provide disk space in MB </h3>
        </div>
      )}
      {value === "furniture" && (
        <div>
          <div className="select_content">
          <label>height</label>
          <input
            name="height"
            type="number"
            onChange={(e) => getValues(e, "height")}
            value={formState.height}
          />
          <label>width</label>
          <input
            name="width"
            type="number"
            onChange={(e) => getValues(e, "width")}
            value={formState.width}
          />
          <label>Length</label>
          <input
            name="length"
            type="number"
            onChange={(e) => getValues(e, "length")}
            value={formState.length}
          />
          </div>
          <h3>*Please, provide dimensions in CM </h3>

        </div>
      )}
      {value === "book" && (
        <div>
          <div className="select_content">
          <label>Weight</label>
          <input
            onChange={(e) => getValues(e, "weight")}
            value={formState.weight}
            type="number"
          />
          </div>
          <h3>*Please, provide weight in KG </h3>
        </div>
      )}
    </div>
  );
};
