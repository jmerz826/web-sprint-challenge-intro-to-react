// Write your Character component here
import React from "react";
import styled from 'styled-components';
import Details from "../details";
// import Details from "../details";

const StyledDiv = styled.div`
    background-color:rgba(0,0,255, 0.2);
    display:flex;
    flex-direction: column;
    flex-wrap: nowrap;

`

const Character = (props) => {
    const { character, currentCharacter } = props;
    let curDetail = null;
    if (character.name === currentCharacter.name) {
        curDetail = <Details
            currentCharacter={currentCharacter}
            closeDetails={props.closeDetails} />;
    }
    return (
        <StyledDiv>
            <a>{character.name}</a>
            {curDetail}
            <button onClick={() => props.openDetails(character)} >See details </button>
        </StyledDiv>
    );

}

export default Character;