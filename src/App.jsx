import { useValue } from "./hooks/useValue";
import "./style/index.css";
import { DECREMENT, INCREMENT } from "./context/variables";

function App() {

    const { value, handleClick } = useValue()

    return (
        <div className="ml-4 mt-4 flex gap-4 items-center">
            <button onClick={()=>handleClick(DECREMENT)} className="border-2 p-2 shadow-md">Decrement</button>
            <h2>{ value}</h2>
            <button onClick={()=>handleClick(INCREMENT)} className="border-2 p-2 shadow-md">Increment</button>
        </div>
    )
}

export default App;
