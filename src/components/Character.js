// Write your Character component here
import React from "react";
import styled from 'styled-components';
import Details from "../details";
// import Details from "../details";

const StyledDiv = styled.div`
    /* background-color:rgba(0,0,255, 0.2); */
    display:flex;
    flex-direction: column;
    align-items:center;
    flex-wrap: nowrap;
    padding:1%;

    button{
        display: inline-block;
        background-color:lightgray;
        border: 1px solid black;
    }

    h3 {
        display:inline-block;
        font-size:1.6rem;
        text-align:center;
    }
`
const StyledTab = styled.div`
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content:space-between;
    width: 75%;
    background-color: rgb(45,143,209);
    border-radius:30000px;
    border: 5px solid darkblue;
    position: relative;

    h3{
        width: 50%;
        margin-left: 10%;
    }

    button{
        position:absolute;
        border-radius: 3333333px;
        height:100%;
        width:20%;
        right:0;
    }
`

const Character = (props) => {
    // use prop nomenclature in local function, for simplicity and readability
    const { character, currentCharacter } = props;
    return (
        <StyledDiv>
            <StyledTab>
                <h3>{character.name}</h3>
                <button onClick={() => {
                    // button will select a character and display the new choice's details if there is not currently a character chosen
                    if (!currentCharacter) {
                        props.openDetails(character)
                    } else {
                        props.closeDetails();
                    }
                    // Buttons will display + if there is a details section open, - if there is not
                }}>{!currentCharacter? '+' : '-' }</button> 
            </StyledTab>
            {/* Only invoke details if there is a character selected */}
            {currentCharacter && character.name === currentCharacter.name ? <Details
            currentCharacter={currentCharacter}
            closeDetails={props.closeDetails} /> : null}
            
        </StyledDiv>
    );

}

export default Character;