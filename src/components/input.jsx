import { AddBoxRounded } from "@mui/icons-material";

const InputArea = ({ handleClick, handleInput, value }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  return (
    <div className="w-full flex justify-center items-center  gap-2 mt-1 sm:mt-3">
      <input
        type="text"
        className="w-4/5 border border-gray-400 bg-gray-100 rounded-md text-gray-800 px-1.5 md:pl-3 lg:pl-5 text-xl h-10"
        onChange={(e) => handleInput(e.target.value)}
        onKeyDown={handleKeyDown}
        value={value}
      />
      <AddBoxRounded
        fontSize="large"
        className="hover:cursor-pointer hover:scale-110"
        color="warning"
        onClick={() => handleClick()}
      />
    </div>
  );
};

export default InputArea;
