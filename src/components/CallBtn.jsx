import React from "react";
function CallBtn({ clickEvent, children }) {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return (
        <button onClick={clickEvent} style={{ backgroundColor: randomColor }}>{children}</button>
    )
}
export default React.memo(CallBtn)
