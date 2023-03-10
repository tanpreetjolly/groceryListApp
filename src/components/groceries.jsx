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

  const deleteItem = () => {};

  return (
    <div className="container outline outline-1 outline-blue-600 w-full mt-5 flex flex-col">
      {groceryItems.map((item) => (
        <Item itemData={item} key={item.id} checked={item.checked} />
      ))}
    </div>
  );
};

export default Groceries;
