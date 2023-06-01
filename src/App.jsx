import { useCallback } from "react";
import { useState, memo } from "react";
import './style/index.css'

const Cat = ({name,meow = f => f}) => {
    console.log(`rendering ${name}`);
    return <p onClick={() => meow(name)}>{ name}</p>
}

const PureCat = memo(Cat)

function App() {
    const [cats,setCats] = useState(['Outlaw','Jungle','Biscuit'])
    const meow = useCallback(name => console.log(`${name} has meowed`),[])
    return (
        <main className="p-7">
            {cats.map((name, i) => (
                <PureCat key={i} name = {name} meow = {meow} />
            ))}

            <button
                className="border-2 bg-slate-400 mt-3 p-2"
                onClick={()=> setCats([...cats,prompt('Name a cat')])}
            >Add a cat</button>
        </main>
    )
}

export default App;
