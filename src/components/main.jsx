import InputArea from "./input";
import Groceries from "./groceries";


const Main = () => {
    return (
        <main className="flex flex-col justify-center items-center  p-5 w-4/5 outline-2 outline outline-red-500">
        <InputArea/>
        <Groceries/>
        </main>
    )
}

export default Main;