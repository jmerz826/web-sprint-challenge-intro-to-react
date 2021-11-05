import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Details = (props) => {
    const { currentCharacter, characterData } = props;
    console.log(currentCharacter.name)
    return (
        <div className="character-details-block">
            <ul>
                <li>Name: {currentCharacter.name}</li>
                {/* <li>Birth Year: {curDetail.birth_year}</li>
                <li>Height: {curDetail.height}cm</li>
                <li>Mass: {curDetail.mass}kg</li> */}
            </ul>
        </div>
    )
}

export default Details;