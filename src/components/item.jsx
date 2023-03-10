import DeleteIcon from "@mui/icons-material/Delete";
import { CheckCircle } from "@mui/icons-material";
import CancelIcon from "@mui/icons-material/Cancel";

const Item = ({ itemData, onToggleCheckbox, onDelete }) => {
  const { id, checked } = itemData;
  return (
    <div className="flex justify-center gap-1 p-2 h-13 text-xl items-center">
      {checked ? (
        <div className="bg-gray-200 w-4/5 text-center rounded-md h-9">
          {itemData.text}
        </div>
      ) : (
        <div className="bg-gray-200 w-4/5 text-center rounded-md h-9 line-through">
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
