import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Details = (props) => {
    const { currentCharacter, closeDetails } = props;
    const [currentCharacterHomeworld, setCurrentCharacterHomeworld] = useState(null);

    useEffect(() => {
        axios.get(currentCharacter.homeworld)
            .then(res => {
                setCurrentCharacterHomeworld(res.data.name);
            })
            .catch(err => console.error(err))
    }, [currentCharacter])

    return (
        <div className="character-details-block">
            <ul>
                <li>Name: {currentCharacter.name}</li>
                <li>Gender: {currentCharacter.gender}</li>
                <li>Birth Year: {currentCharacter.birth_year}</li>
                <li>Height: {currentCharacter.height} cm</li>
                <li>Weight: {currentCharacter.mass} kg</li>
                <li>Films appeared in: {currentCharacter.films.join(', ')}</li>
                <li>Hair Color: {currentCharacter.hair_color}</li>
                <li>Skin Color: {currentCharacter.skin_color}</li>
                <li>Home Planet: {currentCharacterHomeworld}</li>
            </ul>
            <button onClick={closeDetails}>Close Details</button>
        </div>
    )
}

export default Details;