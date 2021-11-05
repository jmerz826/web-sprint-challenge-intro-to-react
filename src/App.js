import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Characters from './components/Characters.js';
import styled from 'styled-components';
import Details from './details';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterData, setCharacterData] = useState({});
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [currentDetails, setCurrentDetails] = useState('');

  const openDetails = name => {
    setCurrentCharacter(name);
  };
  const closeDetails = () => setCurrentCharacter(null);
  // console.log(currentCharacter);



  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        // console.log(res.data);
        setCharacterData(res.data);
      })
      .catch(err => console.error(err))
  }, [currentCharacter])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="characters-content">
        <Characters
          characterData={characterData}
          currentCharacter={currentCharacter}
          openDetails={openDetails}
          closeDetails={closeDetails} />
        {/* {currentCharacter && <Details currentCharacter={currentCharacter} close={closeDetails} characterData={characterData}/>} */}
      </div>
    </div>
  );
}

export default App;
