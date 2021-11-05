import React from 'react';
import Character from './Character';
import styeld from 'styled-components';

const Characters = (props) => {
    const { characterData } = props;
    console.log(characterData);
    console.log(props.openDetails);
    // React was not mapping over the characterData prop. Created temp variable to store characterData as an array, which is then mapped over and passed into Character
    const characterDataArray = Array.from(characterData);
    return (
        <div className='characters-wrapper'>
            {characterDataArray.map(c => {
                return <Character character={c} key={c.name} openDetails={props.openDetails}/>
           })}
        </div>
    );
};

export default Characters;