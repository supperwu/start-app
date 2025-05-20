import React from "react";
import Color from "./Color";

function ColorList({ 
    colors = [],
    onRemove = f => f,
    onRateColor = f => f }) {
    if (!colors.length) {
        return <div>No colors available.(Add a color)</div>;
    }

    return (
        <div>
            {
                colors.map((color) => (<Color 
                    key={color.id} 
                    {...color} 
                    onRemove={onRemove}
                    onRate={onRateColor}
                    />))
            }
        </div>
    );

}

export default ColorList;