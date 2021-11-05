// Write your Character component here
import React from "react";

const Character = (props) => {
    const { character } = props;
    return (
        <div>
            <h2>{character.name}</h2>
        </div>
    )

}

export default Character;