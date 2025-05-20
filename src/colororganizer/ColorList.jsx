import React, {useContext} from "react";
import Color from "./Color";
import { ColorContext } from "../main";

/*
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
*/

function ColorList() {
    const { colors } = useContext(ColorContext);

    if (!colors.length) {
        return <div>No Colors Listed. (Add a Color)</div>;
    }

    return (
        <div>
            {colors.map(color => (
                <Color key={color.id} {...color} />
            ))}
        </div>
    );
}

export default ColorList;