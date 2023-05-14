import "./ProductList.css";
import { ProductShow } from "./ProductShow";
import { Link } from "react-router-dom";

export const ProductList = ({ items, deleteItem, setItems, handleEdit }) => {
  const handleClick = () => {
    setItems([]);
  };

  const renderedItems = items.map((item) => {
    return (
      <ProductShow
        item={item}
        key={item.id}
        deleteItem={deleteItem}
        handleEdit={handleEdit}
      />
    );
  });
  return (
    <div className="product_list">
      <div className="product">
        <h1>List</h1>
        <div className="product-btns">
          <button className="add">
            <Link to="/add-product">Add</Link>{" "}
          </button>
          <button className="del" onClick={handleClick}>
            Clear All
          </button>
        </div>
      </div>
      {items.length !== 0 ? (
        <div className="rendered-items">{renderedItems}</div>
      ) : (
        <p className="rendered-text">
          Click On Add Button To Create New Product...
        </p>
      )}
    </div>
  );
};
