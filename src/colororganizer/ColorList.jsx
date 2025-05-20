import React from "react";
import Color from "./Color";

function ColorList({ colors = [] }) {
    if (!colors.length) {
        return <div>No colors available.(Add a color)</div>;
    }

    return (
        <div>
            {
                colors.map((color) => (<Color key={color.id} {...color} />))
            }
        </div>
    );

}

export default ColorList;