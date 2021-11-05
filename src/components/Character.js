// Write your Character component here
import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color:rgba(0,0,255, 0.2);
`

const Character = (props) => {
    const { character } = props;
    return (
        <StyledDiv>
            <h2>{character.name}</h2>
            <button onClick={() => props.openDetails(character.name)} >See details </button>
        </StyledDiv>
    );

}

export default Character;