import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Details = (props) => {
    const { currentCharacter, closeDetails } = props;
    console.log(currentCharacter.name)
    return (
        <div className="character-details-block">
            <ul>
                <li>Name: {currentCharacter.name}</li>
                <li>Birth Year: {currentCharacter.birth_year}</li>
                <li>Height: {currentCharacter.height} cm</li>
                <li>Weight: {currentCharacter.mass} kg</li>
                <li>Films appeared in: {currentCharacter.films.join(', ')}</li>
            </ul>
        </div>
    )
}

export default Details;