import { useState } from "react";
import "./productShow.css";
import { RiCloseLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

export const ProductShow = ({ item, deleteItem, handleEdit }) => {
  const [editing, setEditing] = useState(false);
  const [edited, setEdited] = useState(item);

  const clicked = (item) => {
    deleteItem(item.id);
  };
  const handleSave = (e) => {
    e.preventDefault();
    handleEdit(edited.id, edited);
    setEditing(false);
  };

  const handleCancel = () => {
    setEdited(item);
    setEditing(false);
  };
  const onInputsEdited = (event, key) => {
    setEdited((prevState) => ({ ...prevState, [key]: event.target.value }));
  };
  return (
    <>
      {editing ? (
        <div className="edit">
          <form>
            <div>
              <label>SKU:</label>
              <input
                value={edited.sku}
                name="sku"
                onChange={(e) => onInputsEdited(e, "sku")}
                required
              />
            </div>
            <div>
              <label>Name:</label>
              <input
                value={edited.name}
                onChange={(e) => onInputsEdited(e, "name")}
                required
                name="name"
              />
            </div>
            <div>
              <label>Price ($):</label>
              <input
                type="number"
                value={edited.price}
                onChange={(e) => onInputsEdited(e, "price")}
                name="price"
              />
            </div>

            {item?.type === "dvd" && (
              <div>
                <label>Size:</label>
                <input
                  value={edited.size}
                  type="number"
                  onChange={(e) => onInputsEdited(e, "size")}
                  name="size"
                />
              </div>
            )}

            {item?.type === "furniture" && (
              <div className="dim">
                <label>Height:</label>
                <input
                  name="height"
                  type="number"
                  onChange={(e) => onInputsEdited(e, "height")}
                  value={edited.height}
                />
                <label>Width:</label>
                <input
                  name="width"
                  type="number"
                  onChange={(e) => onInputsEdited(e, "width")}
                  value={edited.width}
                />
                <label>Length:</label>
                <input
                  name="length"
                  type="number"
                  onChange={(e) => onInputsEdited(e, "length")}
                  value={edited.length}
                />
              </div>
            )}

            {item?.type === "book" && (
              <div>
                <label>Weight:</label>
                <input
                  onChange={(e) => onInputsEdited(e, "weight")}
                  value={edited.weight}
                  type="number"
                />
              </div>
            )}
            <div className="btn">
              <button className="add" onClick={(e) => handleSave(e)}>
                Save
              </button>
              <button className="del" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="show scale-up-center">
          <div className="content">
            <div className="svg-close" onClick={() => clicked(item)}>
              <RiCloseLine />
            </div>
            <div className="svg-edit" onClick={() => setEditing(true)}>
            <FaEdit/>
            </div>
              
            <p>
              Code: <span>{item.sku}</span>
            </p>
            <p>
              Name: <span>{item.name}</span>{" "}
            </p>
            <p>
              Price: <span>{`${item.price} $`}</span>{" "}
            </p>
            {item?.type === "dvd" && (
              <p>
                Size: <span>{item?.size} MB</span>
              </p>
            )}

            {item?.type === "furniture" && (
              <p>
                Dim:
                <span>
                  {item?.width} * {item?.length} * {item?.height} CM
                </span>
              </p>
            )}

            {item?.type === "book" && (
              <p>
                Weight: <span>{item?.weight} KG</span>
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};
