// Write your Character component here
import React from "react";

const Character = (props) => {
    const { character } = props;
    return (
        <h2>{character.name}</h2>
    );

}

export default Character;