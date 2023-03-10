import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { CheckCircle } from "@mui/icons-material";
import CancelIcon from "@mui/icons-material/Cancel";

const Item = ({ itemData, checked }) => {
  const toggleCheckbox = (id) => {
    itemData.forEach((item) => {
      if (id === itemData.id) {
        setGroceryItems(!groceryItems[id].checked);
        console.log("toggle");
      }
    });
  };

  return (
    <div className="flex justify-between p-2 h-13 text-xl items-center">
      {itemData.checked ? (
        <CheckCircle color="success" size="large" onClick={toggleCheckbox} />
      ) : (
        <CancelIcon color="primary" onClick={toggleCheckbox} />
      )}
      {itemData.checked ? (
        <div className="bg-gray-200 w-4/5 text-center rounded-md h-9">
          {itemData.text}
        </div>
      ) : (
        <div className="bg-gray-200 w-4/5 text-center rounded-md h-9 line-through">
          {itemData.text}
        </div>
      )}
      <DeleteIcon color="error" />
    </div>
  );
};

export default Item;
