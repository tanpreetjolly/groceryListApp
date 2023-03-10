import { useState } from "react";
import Item from "./item";
import InputArea from "./input";

const Groceries = () => {
  const [inputValue, setInputValue] = useState("");
  const [groceryItems, setGroceryItems] = useState([]);

  const addItem = () => {
    if (inputValue.trim() !== "") {
      const newId = Date.now();
      const newItem = {
        id: newId,
        text: inputValue.trim(),
        checked: true,
      };
      setInputValue("");
      setGroceryItems((prevItems) => [...prevItems, newItem]);
    } else {
      alert("Please enter a non-empty value.");
    }
  };

  const handleInput = (value) => {
    setInputValue(value);
  };

  const toggleCheckbox = (itemId) => {
    const updatedItems = groceryItems.map((item) =>
      item.id === itemId ? { ...item, checked: !item.checked } : item
    );
    setGroceryItems(updatedItems);
  };

  const deleteItem = (itemId) => {
    const filteredItems = groceryItems.filter((item) => item.id !== itemId);
    setGroceryItems(filteredItems);
  };

  return (
    <div className="groceries flex flex-col items-center justify-center">
      <InputArea handleClick={addItem} handleInput={handleInput} />
      {groceryItems.length === 0 ? (
        <div id="emptyList" className="text-2xl mt-2">
          Empty List
        </div>
      ) : (
        <div className="container w-full mt-5 flex flex-col">
          {groceryItems.map((item) => (
            <Item
              itemData={item}
              key={item.id}
              onToggleCheckbox={toggleCheckbox}
              onDelete={deleteItem}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Groceries;
