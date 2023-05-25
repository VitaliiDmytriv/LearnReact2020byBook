import { useColors } from "../hooks/useColors";
import Color from "./Color";

function ColorList() {

    const {colors} = useColors()

    if (!colors.length) return <div>No colors listed. Add color</div>
    
    return ( 
        <>
            {colors.map(color => <Color key={color.id} {...color}/>)}
        </>
     );
}

export default ColorList;