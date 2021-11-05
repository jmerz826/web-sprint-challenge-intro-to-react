import React from 'react';
import Character from './Character';

const Characters = (props) => {
    const { characterData } = props;

    // React was not 
    const characterDataArray = Array.from(characterData);
    return (
        <div className='characters-wrapper'>
            {characterDataArray.map(c => {
                return <Character character={c} key={c.mass} />
           })}
        </div>
    );
};

export default Characters;