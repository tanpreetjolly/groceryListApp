import { useState } from "react";
import Item from "./item";

const Groceries = () => {
  const [groceryItems, setGroceryItems] = useState([
    {
      id: 1,
      text: "Gobi",
      checked: true,
    },
  ]);

  const toggleCheckbox = (itemId) => {
    let updatedItems = groceryItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, checked: !item.checked };
      } else {
        return item;
      }
    });
    setGroceryItems(updatedItems);
  };

  const deleteItem = (itemId) => {
    let filteredItems = groceryItems.filter((item) => item.id !== itemId);
    setGroceryItems(filteredItems);
  };

  return (
    <div className="container outline outline-1 outline-blue-600 w-full mt-5 flex flex-col">
      {groceryItems.map((item) => (
        <Item
          itemData={item}
          key={item.id}
          onToggleCheckbox={toggleCheckbox}
          onDelete={deleteItem}
        />
      ))}
    </div>
  );
};

export default Groceries;
