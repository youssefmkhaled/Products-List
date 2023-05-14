import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import { ProductAdd } from "./components/ProductAdd";
import { ProductList } from "./components/ProductList";
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get("http://localhost:3001/items");
    setItems(response.data);
  };

  const createItem = async (data) => {
    const response = await axios.post("http://localhost:3001/items", {
      ...data,
    });
    const updatedItems = [...items, response.data];
    setItems(updatedItems);
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:3001/items/${id}`);
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEdit = async (id, newData) => {
    await axios.put(`http://localhost:3001/items/${id}`, newData);
    setItems(items.map((item) => (item.id === id ? newData : item)));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                items={items}
                deleteItem={deleteItem}
                setItems={setItems}
                handleEdit={handleEdit}
              />
            }
          />
          <Route
            path="/add-product"
            element={<ProductAdd onCreate={createItem} value={items} />}
          />
          <Route path="/Products-List" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
