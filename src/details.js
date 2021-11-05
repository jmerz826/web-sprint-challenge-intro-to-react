import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledDetails = styled.div`
    /* background-color:orange; */
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    background-color: rgba(255,153,51,0.8);

    ul{
        display: inline-block;
        text-align:center;
        list-style-position: inside;
        padding: 1%;
    }

`

const Details = (props) => {
    const { currentCharacter, closeDetails } = props;
    const [currentCharacterHomeworld, setCurrentCharacterHomeworld] = useState(null);

    // Obtains selected character's home planet
    useEffect(() => {
        axios.get(currentCharacter.homeworld)
            .then(res => {
                setCurrentCharacterHomeworld(res.data.name);
                
            })
            .catch(err => console.error(err))
    }, [currentCharacter])



    return (
        <StyledDetails onDoubleClick={closeDetails}>
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
        </StyledDetails>
    )
}

export default Details;