import React from 'react';
import Character from './Character';

const Characters = (props) => {
    const { characterData } = props;
    console.log(characterData);

    return (
        <div className='characters-wrapper'>
        <h1>hi, just test. delete soon</h1>
            {characterData.map(char => {
                return <Character character={char}/>
            })}
        </div>
    )
}

export default Characters;