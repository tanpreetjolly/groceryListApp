import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { CheckCircle } from "@mui/icons-material";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";

const Item = ({ itemData, onToggleCheckbox, onDelete }) => {
  const { id, text, checked } = itemData;
  return (
    <div className="flex justify-between p-2 h-13 text-xl items-center">
      {checked ? (
        <CheckCircle
          color="success"
          size="large"
          onClick={() => onToggleCheckbox(id)}
        />
      ) : (
        <CancelIcon color="primary" onClick={() => onToggleCheckbox(id)} />
      )}
      {checked ? (
        <div className="bg-gray-200 w-4/5 text-center rounded-md h-9">
          {itemData.text}
        </div>
      ) : (
        <div className="bg-gray-200 w-4/5 text-center rounded-md h-9 line-through">
          {itemData.text}
        </div>
      )}
      <DeleteIcon color="error" onClick={() => onDelete(id)} />
    </div>
  );
};

export default Item;
