const InputArea = () => {
    return (
        <div className="w-full flex justify-center gap-2 text-lg">
            <input type="text" className="w-4/5 border-2 border-gray-400 bg-gray-300 rounded-md text-gray-800 px-1.5 pb-1"/>
            <button className="bg-teal-800 h-10 w-10 rounded-md text-white text-2xl pb-1">+</button>
        </div>
    )
};

export default InputArea;