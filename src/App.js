// Import frameworks
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Characters from './components/Characters.js';

const App = () => {
  // Declare useStates, to be modulated later
  const [characterData, setCharacterData] = useState({});
  const [currentCharacter, setCurrentCharacter] = useState(null);

  // Create open and close functions, to be used for details component
  const openDetails = name => {
    setCurrentCharacter(name);
  };
  const closeDetails = () => setCurrentCharacter(null);


  // Fetches characters from the API
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        // sets character data to info received from API call
        setCharacterData(res.data);
      })
      .catch(err => console.error(err))
  }, [currentCharacter]) // useEffect will be invoked each time the currentCharacter state changes

  return (
    <div className="App">
      {/* title */}
      <h1 className="Header">⭐⚔️🪐🛸🌌 Star Wars Characters! ⭐⚔️🪐🛸🌌</h1> 
      <div className="characters-content">
        {/* insert Characters with appropriate props being passed down */}
        <Characters
          characterData={characterData}
          currentCharacter={currentCharacter}
          openDetails={openDetails}
          closeDetails={closeDetails} />
      </div>
    </div>
  );
}

export default App;
