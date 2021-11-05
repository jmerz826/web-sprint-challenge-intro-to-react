// Import frameworks
import React from 'react';
import Character from './Character';
import styled from 'styled-components';

//styling div
const StyledCharactersWrapper = styled.div`
    width: 100%;
    
`

const Characters = (props) => {
    const { characterData } = props;

    // React was not mapping over the characterData prop for unknown reason. Created temp variable to store characterData as an array, which is then mapped over and passed into Character
    const characterDataArray = Array.from(characterData);
    return (
        <StyledCharactersWrapper>
            {/* Map over the array and push each into the Character component */}
            {characterDataArray.map(c => {
                return (<Character
                    character={c}
                    key={c.name}
                    openDetails={props.openDetails}
                    closeDetails={props.closeDetails}
                    currentCharacter={props.currentCharacter} />)
            })}
        </StyledCharactersWrapper>
    );
};

export default Characters;