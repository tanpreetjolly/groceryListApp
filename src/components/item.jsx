import DeleteIcon from "@mui/icons-material/Delete";
import { CheckCircle } from "@mui/icons-material";
import CancelIcon from "@mui/icons-material/Cancel";

const Item = ({ itemData, onToggleCheckbox, onDelete }) => {
  const { id, checked } = itemData;
  return (
    <div className="flex justify-center gap-1 p-2 h-13 text-xl items-center">
      {checked ? (
        <div className="w-4/5 text-center rounded-md h-9 border border-solid border-green-800 text-gray-900 bg-green-100">
          {itemData.text}
        </div>
      ) : (
        <div className="bg-red-100 w-4/5 text-center rounded-md h-9 line-through border border-solid border-red-800">
          {itemData.text}
        </div>
      )}
      {checked ? (
        <CheckCircle
          color="success"
          size="large"
          className="hover:cursor-pointer hover:scale-110"
          onClick={() => onToggleCheckbox(id)}
        />
      ) : (
        <CancelIcon
          color="primary"
          className="hover:cursor-pointer  hover:scale-110"
          onClick={() => onToggleCheckbox(id)}
        />
      )}
      <DeleteIcon
        color="error"
        className="hover:cursor-pointer  hover:scale-110 "
        onClick={() => onDelete(id)}
      />
    </div>
  );
};

export default Item;
