import React from "react";

export default function Condition() {
    var myName = "Mohamed",
        login = false;
    return (
        <div>
            <h1>Condition</h1>
            {/* Username is :{login ? "Hello " + myName : "Undefined user"} */}
            Username is :{login && myName}
        </div>
    );
}
