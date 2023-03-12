import Groceries from "./groceries";

const Main = () => {
  return (
    <main className="main flex justify-center h-4/5 px-1 sm:w-3/4 lg:w-3/5 border  border-x border-b rounded-b-xl bg-white w-4/5 border-gray-700 ">
      <Groceries />
    </main>
  );
};

export default Main;
