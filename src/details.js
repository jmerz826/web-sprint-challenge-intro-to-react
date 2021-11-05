import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Details = (props) => {
    const { currentCharacter } = props;
    const [details, setDetails] = useState('');
    console.log(currentCharacter.url)

    // useEffect(() => {
    //     axios.get(currentCharacter.url)
    // })
    return (
        <h4>{currentCharacter.mass}</h4>
    )
}

export default Details;