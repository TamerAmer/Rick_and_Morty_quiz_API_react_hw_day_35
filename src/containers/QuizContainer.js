import React, { useState, useEffect } from "react";
import CharacterList from "../components/CharacterList";
import CharacterForm from "../components/CharacterForm";

const QuizContainer = () => {



    const [characters, setCharacters] = useState([])
    const [pageCounter, setPageCounter]=useState(1)
    // const [charNamesBox, setCharNamesBox]=useState([])


    useEffect(() => {
        getCharacters(characters)
    }, [pageCounter])

    const getCharacters = () => {
        fetch(`https://rickandmortyapi.com/api/character?page=${pageCounter}`)
        .then(res => res.json())
        .then(char => setCharacters(char.results))
    }

    const nextLevel=() => {
        if(pageCounter<42){
        setPageCounter(pageCounter+1)
        }
    }

    const previousLevel=() => {
        if(pageCounter>1){
        setPageCounter(pageCounter-1)
        }
    }

    const guessData=[]

    const[guesses,setGuesses]=useState(guessData);

    // TODO: ADD A CHARACTER FORM TO ALL THE CHARACTERS EVERY TIME THE PAGE CHANGES AND UPDATE THE GUESSDATA ARRAY WHEN THEY GET A CORRECT MATCH

    const addCharacterGuess=(submittedGuess) => {
        // TODO: ADD IF STATEMENT THAT CHECKS IF submittedGuess is == to the name of its assigned CHARACTER
        // TODO: GIVE EACH FORM A UNIQUE ID
        // submittedComment.id=Date.now();
        const updatedGuesses=[...guesses,submittedGuess]
        setGuesses(updatedGuesses);
    }

    return (
        <>
            <h1>THE BIG FAT RICK AND MORTY QUIZ OF THE YEAR</h1>
            <h2>Level {pageCounter}</h2>
            <button onClick={previousLevel}>Previous Level</button>
            <button onClick={nextLevel}>Next Level</button>
            <CharacterList characters={characters} />
            <CharacterForm onCharacterChange={addCharacterGuess} character={characters}/>
            <br></br>
            <button onClick={previousLevel}>Previous Level</button>
            <button onClick={nextLevel}>Next Level</button>
        </>
    )
}
export default QuizContainer

// charNamesBox={charNamesBox}