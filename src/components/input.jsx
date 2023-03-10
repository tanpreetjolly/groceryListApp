import { AddBoxRounded } from "@mui/icons-material";

const InputArea = ({ handleClick, handleInput }) => {
  return (
    <div className="w-full flex justify-center gap-2 text-lg">
      <input
        type="text"
        className="w-4/5 border-2 border-gray-400 bg-gray-300 rounded-md text-gray-800 px-1.5"
        onChange={(e) => handleInput(e.target.value)}
      />
      <AddBoxRounded
        fontSize="large"
        color="warning"
        onClick={() => handleClick()}
      />
    </div>
  );
};

export default InputArea;
