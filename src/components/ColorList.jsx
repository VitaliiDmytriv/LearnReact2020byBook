import Color from "./Color";

function ColorList({ colors = [], onRemoveColor = f => f, onRateColor = f => f}) {
    if(!colors.length) return <div>No colors listed</div>
    return ( 
        <>
            {colors.map(color =>
                <Color
                    key={color.id}
                    {...color}
                    onRemove={onRemoveColor} 
                    onRate = {onRateColor}
                />)}
                
        </>
     );
}

export default ColorList;