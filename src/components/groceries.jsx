import { useState } from "react";
import Item from "./item";
import InputArea from "./input";
import cart from "../img/cart.png";
import { useEffect } from "react";

const Groceries = () => {
  const [inputValue, setInputValue] = useState("");
  const [groceryItems, setGroceryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = "http://localhost:3500/items";

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not received response");
        const listItems = await response.json();
        setGroceryItems(listItems);
        console.log(listItems);
      } catch (err) {
        console.log(err.stack);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => fetchItems(), 1500); // invoked after loading the page, added time to seem more practical
  }, []);

  const addItem = () => {
    if (inputValue.trim() !== "") {
      const newId = Date.now();
      const newItem = {
        id: newId,
        text: inputValue.trim(),
        checked: true,
      };
      setGroceryItems((prevItems) => [...prevItems, newItem]);
      setInputValue("");
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
    <div className="groceries pt-2 flex flex-col w-full sm:w-4/5 justify-start gap-1 items-center overflow-y-scroll">
      <InputArea
        handleClick={addItem}
        handleInput={handleInput}
        value={inputValue}
      />
      {groceryItems.length === 0 ? (
        <div
          id="emptyList"
          className="text-xl mt-16 sm:mt-12 lg:mt-8 flex flex-col items-center text-slate-800"
        >
          <img
            src={cart}
            alt="empty list"
            className="block w-32 sm:w-40 lg:w-44 xl:w-48"
          />
          <p className="mt-2 lg:mt-0">The list is empty</p>
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
