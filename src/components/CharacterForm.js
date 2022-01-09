import React, {useState} from "react"

const CharacterForm = ({onCharacterChange}) => {

    const [guess,setGuess]=useState("");

    const handleGuessChange=(evt) => {
        setGuess(evt.target.value);
        evt.preventDefault();
        const GuessToSubmit=guess.trim();
        if (!GuessToSubmit ){
            return
        }
        //TODO: Update Characters in CharacterBox
        onCharacterChange({
            guess:GuessToSubmit,
        })
    };

    



    return(
            <input
                type="text"
                placeholder="Enter Character Name"
                value={guess}
                onChange={handleGuessChange}
            />
    )

}

export default CharacterForm;